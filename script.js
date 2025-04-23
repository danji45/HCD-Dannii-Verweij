const buttons = document.querySelectorAll('.keyboard button');
const textveld = document.querySelector('.textveld');
const keyboardDiv = document.querySelector('.keyboard');
const copyButton = document.querySelector('.copy-button');
const copyFeedback = document.querySelector('.copy-feedback');

let letterModus = false;
let actieveSet = null;
let pressStartTime = 0; // Track when button press started

let origineleTeksten = [
    "a b<br>c d<br>e f",
    "g h<br>i j<br>k l",
    "m n<br>o p<br>q r",
    "s t<br>u v<br>w x",
    "y z<br>1 2<br>3 4",
    "5 6<br>7 8<br>9 ."
];

const letterSets = {
    0: ['a', 'b', 'c', 'd', 'e', 'f'],
    1: ['g', 'h', 'i', 'j', 'k', 'l'],
    2: ['m', 'n', 'o', 'p', 'q', 'r'],
    3: ['s', 't', 'u', 'v', 'w', 'x'],
    4: ['y', 'z', '1', '2', '3', '4'],
    5: ['5', '6', '7', '8', '9', '.']
};

// Add CSS style for bigger letters
const style = document.createElement('style');
style.textContent = `
    .keyboard button.big-letter {
        font-size: 24px; /* Larger font size */
        font-weight: bold; /* Make it bolder for better visibility */
    }
`;
document.head.appendChild(style);

// Copy button functionality
copyButton.addEventListener('click', () => {
    const textToCopy = textveld.innerText;
    
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => showCopyFeedback('Text copied to clipboard!'))
            .catch(err => showCopyFeedback('Could not copy text: ' + err));
    } else {
        // Fallback for older browsers
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = textToCopy;
        tempTextArea.style.position = 'absolute';
        tempTextArea.style.left = '-9999px';
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'Text copied to clipboard!' : 'Copy failed';
            showCopyFeedback(msg);
        } catch (err) {
            showCopyFeedback('Could not copy text: ' + err);
        }
        
        document.body.removeChild(tempTextArea);
    }
});

// Function to show feedback message
function showCopyFeedback(message) {
    copyFeedback.textContent = message;
    copyFeedback.style.display = 'block';
    
    setTimeout(() => {
        copyFeedback.style.display = 'none';
    }, 2000);
}

// Klik op een knop
buttons.forEach((btn, index) => {
    btn.addEventListener('mousedown', () => {
        pressStartTime = Date.now(); // Record press start time
    });

    btn.addEventListener('mouseup', () => {
        const pressDuration = Date.now() - pressStartTime;
        const isLongPress = pressDuration > 500; // Long press threshold (500ms is more responsive than 2000ms)

        if (!letterModus) {
            // Eerste klik activeert lettermodus
            actieveSet = letterSets[index];
            if (actieveSet) {
                buttons.forEach((b, i) => {
                    b.textContent = actieveSet[i];
                    b.classList.add('big-letter'); // Add class for bigger letters
                });
                letterModus = true;
            }
        } else {
            // Tweede klik: letter invoegen
            let letter = btn.textContent;

            // Special case for period (.) - long press outputs exclamation mark (!)
            if (letter === '.' && isLongPress) {
                letter = '!';
            } 
            // For all other letters, capitalize on long press
            else if (isLongPress) {
                letter = letter.toUpperCase();
            }

            textveld.innerText += letter;

            // Reset knoppen
            buttons.forEach((b, i) => {
                b.innerHTML = origineleTeksten[i];
                b.classList.remove('big-letter'); // Remove class when returning to original state
            });

            letterModus = false;
            actieveSet = null;

            highlightLastRow();
        }
    });

    // Also handle touch events for mobile devices
    btn.addEventListener('touchstart', (e) => {
        pressStartTime = Date.now();
    });

    btn.addEventListener('touchend', (e) => {
        const pressDuration = Date.now() - pressStartTime;
        const isLongPress = pressDuration > 500;

        if (!letterModus) {
            // First tap activates letter mode
            actieveSet = letterSets[index];
            if (actieveSet) {
                buttons.forEach((b, i) => {
                    b.textContent = actieveSet[i];
                    b.classList.add('big-letter'); // Add class for bigger letters
                });
                letterModus = true;
            }
        } else {
            // Second tap: insert letter
            let letter = btn.textContent;

            // Special case for period (.) - long press outputs exclamation mark (!)
            if (letter === '.' && isLongPress) {
                letter = '!';
            }
            // For all other letters, capitalize on long press
            else if (isLongPress) {
                letter = letter.toUpperCase();
            }

            textveld.innerText += letter;

            // Reset buttons
            buttons.forEach((b, i) => {
                b.innerHTML = origineleTeksten[i];
                b.classList.remove('big-letter'); // Remove class when returning to original state
            });

            letterModus = false;
            actieveSet = null;

            highlightLastRow();
        }
        e.preventDefault(); // Prevent default touch behavior
    });
});

// Klik op lege ruimte
keyboardDiv.addEventListener('click', (e) => {
    const rect = keyboardDiv.getBoundingClientRect();
    const midden = rect.left + rect.width / 8;

    if (!e.target.closest('button')) {
        if (e.clientX > midden) {
            textveld.innerText += ' ';
            keyboardDiv.style.backgroundColor = '#c0f6b9';
        } else {
            textveld.innerText = textveld.innerText.slice(0, -1);
            keyboardDiv.style.backgroundColor = '#ebb0b0';
        }

        setTimeout(() => {
            keyboardDiv.style.backgroundColor = '#f0f0f0';
        }, 150);

        highlightLastRow();
    }
});

// Optioneel: highlight functie
function highlightLastRow() {
    // Tekst highlight werkt niet visueel in textarea zonder complexere HTML-structuur.
    // Je zou dit visueel moeten maken met contenteditable of overlay
}