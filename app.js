let words = ['stare', 'magic', 'cloud', 'patch', 'could', 'fears'];
var ok = true;
var currentLine = 1;
var inputIds = ['firstLetter', 'secondLetter', 'thirdLetter', 'forthLetter', 'fifthLetter'];

document.body.onload = enableLine(currentLine);

function enableLine(lineIndex) {
    for (let index = 1; index < 6; index++) {
        let disabledValue = index !== lineIndex;
        for (let elementIndex = 0; elementIndex < inputIds.length; elementIndex++) {
            let elementName = index + inputIds[elementIndex];
            document.getElementById(elementName).disabled = disabledValue;
        }
    }
}


let randomNumber = Math.floor(Math.random() * 6);
let chosenWord = '';
chosenWord = words[randomNumber];
console.log(chosenWord);

document.getElementById("winner").hidden = true;
document.getElementById("loser").hidden = true;
document.getElementById("word").hidden = true;

function movetoNext(current, nextFieldID) {
    if (current.value.length >= current.maxLength) {
        document.getElementById(nextFieldID)?.focus();
    };
};

function handleFormSubmit(index) {
    ok = true;
    for (let elementIndex = 0; elementIndex < inputIds.length; elementIndex++) {
        let elementName = index + inputIds[elementIndex];
        checkLetter(document.getElementById(elementName).value, elementIndex, elementName);
    }

    if (ok === true) {
        document.getElementById("winner").hidden = false;
    } else if (index == 5) {
        document.getElementById("loser").hidden = false;
        document.getElementById("word").hidden = false;
        document.getElementById("word").innerHTML = ("The word is: " + chosenWord);
    }
    else {
        currentLine++;
        enableLine(currentLine);
    }
};

function checkLetter(letter, number, idName) {
    if (chosenWord[number] === letter) {
        $('#' + idName).addClass('green');
    } else if (chosenWord.indexOf(letter) != -1) {
        $('#' + idName).addClass('yellow');
        ok = false;
    } else {
        ok = false;
    }
};
