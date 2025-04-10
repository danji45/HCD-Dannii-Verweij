const t9Mapping = {
    "2": "abc", "3": "def", "4": "ghi",
    "5": "jkl", "6": "mno", "7": "pqrs",
    "8": "tuv", "9": "wxyz"
};

// Simpele woordenlijst
const dictionary = {
    "4663": ["goed", "home", "gone"],
    "43556": ["hello"],
    "8733": ["tree", "used"]
};

let inputCode = "";
const output = document.getElementById("output");
const suggestionsDiv = document.getElementById("suggestions");

function pressKey(key) {
    if (key === "0") {
        inputCode = "";
        output.innerText += " ";
    } else {
        inputCode += key;
    }
    updateSuggestions();
}

function deleteKey() {
    inputCode = inputCode.slice(0, -1);
    updateSuggestions();
}

function updateSuggestions() {
    output.innerText = inputCode;
    suggestionsDiv.innerHTML = "";  

    if (dictionary[inputCode]) {
        dictionary[inputCode].forEach(word => {
            const button = document.createElement("button");
            button.innerText = word;
            button.onclick = () => selectWord(word);
            suggestionsDiv.appendChild(button);
        });
    }
}

function selectWord(word) {
    output.innerText = word;
    inputCode = "";
    suggestionsDiv.innerHTML = "";
}
