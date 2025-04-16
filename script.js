const buttons = document.querySelectorAll('.parent button');
const textveld = document.querySelector('.textveld');
const parentDiv = document.querySelector('.parent');

let letterModus = false;
let actieveSet = null;

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


// Klik op een knop
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (!letterModus) {
            actieveSet = letterSets[index];
            if (actieveSet) {
                buttons.forEach((b, i) => {
                    b.textContent = actieveSet[i];
                });
                letterModus = true;
            }
        } else {
            // Voeg letter toe
            textveld.value += btn.textContent;

            // Reset knoppen
            buttons.forEach((b, i) => {
                b.innerHTML = origineleTeksten[i];

            });
            letterModus = false;
            
            actieveSet = null;
        }

        // Highlight laatste rij (optioneel)
        highlightLastRow();
    });
});

// Klik op lege ruimte
parentDiv.addEventListener('click', (e) => {
    const rect = parentDiv.getBoundingClientRect();
    const midden = rect.left + rect.width / 8;

    if (!e.target.closest('button')) {
        if (e.clientX > midden) {
            textveld.value += ' ';
            parentDiv.style.backgroundColor = '#c0f6b9';
        } else {
            textveld.value = textveld.value.slice(0, -1);
            parentDiv.style.backgroundColor = '#ebb0b0';
        }

        setTimeout(() => {
            parentDiv.style.backgroundColor = '#f0f0f0';
        }, 150);

        highlightLastRow();
    }
});

// Optioneel: highlight functie (werkt niet direct visueel in textarea, maar laten we het staan)
function highlightLastRow() {
    // Tekst highlight werkt niet visueel in textarea zonder complexere HTML-structuur.
    // Je zou dit visueel moeten maken met contenteditable of overlay — voorlopig laten we dit als placeholder.
}
