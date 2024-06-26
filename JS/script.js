// Element Selection
const multiplicationForm = document.querySelector("#math-form")
const numberImput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplicator-operations")
const MathTitle = document.querySelector("#multiplication-title span")

//Functions
const createTable = (number,multiplicatorNumber) => {

    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i
        
    const template = ` <div class="row">
                <div class="operation">${number} x ${i} =</div>
                <div class="result"> ${result} </div>
                </div>`;

    const parser = new DOMParser()

    const htmlTemplate = parser.parseFromString(template, "text/html")

    const row = htmlTemplate.querySelector(".row")

    multiplicationTable.appendChild(row);
    }

    MathTitle.innerText = number;
};

//Events
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberImput.value;

    const multiplicatorNumber = +multiplicationInput.value;

        // Simples Validation
        if(!multiplicationNumber || !multiplicationNumber) return;

        createTable(multiplicationNumber, multiplicatorNumber)
})