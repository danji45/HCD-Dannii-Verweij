const buttons = document.querySelectorAll('.parent button');
const textveld = document.querySelector('.textveld');
const parentDiv = document.querySelector('.parent');

let letterModus = false;
let actieveSet = null;

let origineleTeksten = [
    "a b c d e f",
    "g h i j k l",
    "m n o p q r",
    "s t u v w x",
    "y z 1 2 3 4",
    "5 6 7 8 9 ."
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
        // Zet knoppen om naar hun letterset als je niet al in lettermodus zit
        if (!letterModus) {
            actieveSet = letterSets[index];
            if (actieveSet) {
                buttons.forEach((b, i) => {
                    b.textContent = actieveSet[i];
                });
                letterModus = true;
            }
        } else {
            // Als je al in lettermodus bent, voeg de letter toe aan het tekstveld
            textveld.value += btn.textContent;

            // Zet knoppen terug naar begin
            buttons.forEach((b, i) => {
                b.textContent = origineleTeksten[i];
            });
            letterModus = false;
            actieveSet = null;
        }

        // Highlight de laatst toegevoegde rij
        highlightLastRow();
    });
});

// Klik op lege ruimte = spatie of backspace, afhankelijk van waar je klikt
parentDiv.addEventListener('click', (e) => {
    // Bereken de middenpositie van de lege ruimte
    const rect = parentDiv.getBoundingClientRect();
    const midden = rect.left + rect.width / 8;
    
    // Als je niet op een knop klikt
    if (!e.target.closest('button')) {
        if (e.clientX > midden) {
            // Voeg spatie toe aan de tekst
            textveld.value += ' ';

            // Verander de achtergrondkleur naar groen
            parentDiv.style.backgroundColor = '#c0f6b9';

            // Zet de kleur terug na 300ms
            setTimeout(() => {
                parentDiv.style.backgroundColor = '#f0f0f0';
            }, 150);
        } else { 

            
            // Doe backspace als je rechts van het midden klikt
            textveld.value = textveld.value.slice(0, -1);

            // Verander de achtergrondkleur naar rood
            parentDiv.style.backgroundColor = '#ebb0b0';

            // Zet de kleur terug na 300ms
            setTimeout(() => {
                parentDiv.style.backgroundColor = '#f0f0f0';
            }, 150);
        }

        // Highlight de laatst toegevoegde rij
        highlightLastRow();
    }
});

// Functie voor het highlighten van de laatste rij
function highlightLastRow() {
    // Verkrijg de waarde van het tekstveld
    let tekst = textveld.value;

    // Splits de tekst in rijen op basis van de nieuwe regel (\n)
    let regels = tekst.split('\n');

    // Verkrijg de laatste rij
    let laatsteRij = regels[regels.length - 1];

    // Voeg de highlight toe aan de laatste rij
    tekst = regels.slice(0, -1).join('\n') + '\n' + `<mark style="background-color: yellow;">${laatsteRij}</mark>`;

    // Zet de waarde van het tekstveld weer in de juiste opmaak
    textveld.innerHTML = tekst;
}
