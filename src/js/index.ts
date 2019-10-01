interface Person {
    firstName: string;
    lastName: string;
}

//#region CollectWords
let words: string[] = [];
let word: string;
let listWord: string;

let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("wordInput");

let saveBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("saveBtn");
saveBtn.addEventListener("click", saveWords);

function saveWords(): void {
    let word: string = inputElement.value
    words.push(word)
    console.log(words.toString())
}

let listBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("listBtn");
listBtn.addEventListener("click", listWords);

function listWords(): void {
    outputElement.innerHTML = words.toString()
    console.log(words.toString())
}

let clearBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearWords);

function clearWords(): void {
    words.length = 0;
    outputElement.innerHTML = "";
    console.log(words.toString())
}

let outputElement: HTMLElement = <HTMLElement>document.getElementById("output");
//#endregion CollectWords


//#region StringManipulation

let inputManipulation: HTMLInputElement = <HTMLInputElement>document.getElementById("userInput");

let goBtn: HTMLInputElement = <HTMLInputElement>document.getElementById("convText");
goBtn.addEventListener("click", convString);

function convString(): void {
    if (optToUpper.selected != null && optToLower != null) {
        if (optToLower.selected) {
            var word = inputManipulation.value;
            output.innerHTML = word.toLocaleLowerCase();
        }

        console.log("To lower Selected: "+optToLower.selected);

        if(optToUpper.selected)
        {
            var word = inputManipulation.value;
            output.innerHTML = word.toLocaleUpperCase();
        }

        console.log("To Upper Selected: "+optToUpper.selected); 
    }
}

let output: HTMLElement = <HTMLElement>document.getElementById("outputManipulation");

let optToUpper: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Upper");
let optToLower: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Lower");


//#endregion StringManipulation