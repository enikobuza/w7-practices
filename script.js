/*
function functionName(parameter) {
    parameter === "argumentum as a string";
}
functionName("argumentum as a string");


const argument = "argument as a string";
const functionName = function (parameter) {
    parameter === "argumentum as a string";
}
functionName(argument);



const functionName = () => {

}
functionName();

Ha a változóba mentjük, akkor a változó tartalma alapján működik, előtte létre kell hozni, mert előtte nem érem el
A scope-ban van különbség
Az arrownak az a hátránya, hogy metódusként nem tudjuk használni
*/

const inputElement = (type, name, label) => {
    return `
    <div>
    <label>${label}</label>
    <input type="${type}" name="${name}">
    </div>`;
}

const formElement = `
    <form id="form">
        ${inputElement("text", "firstName", "Keresztneved")}
        ${inputElement("file", "profilePic", "Profilképed")}
        ${inputElement("email", "personal", "E-mail címed")}
        ${inputElement("radio", "newsLetter", "Hírlevelet kérek")}
        ${inputElement("checkbox", "terms", "Elfogadod a felhasználási feltételeket?")}
        <button>OK</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault(); /* ne töltse újra az oldalt */
    console.log(event);
    event.target.classList.add("submitted");

}

const inputEvent = (event) => {
    console.log(event.target.value);
    if (event.target.name === "firstName" ) {
        document.getElementById("inputValueContent").innerHTML = event.target.value
    };
}

function loadEvent() {
    const root = document.getElementById("root");       
    root.insertAdjacentHTML("beforeend", formElement);  
    root.insertAdjacentHTML("beforeend", `              
        <div id="inputValueContent"></div>
    `);                                                 

    const form = document.getElementById("form");       
    form.addEventListener("submit", formSubmit);        

    const inputList = form.querySelectorAll("input");   //inputList változó(az összes input (type, name) kerül bele)
    for (const input of inputList) {
        input.addEventListener("input", inputEvent);
    }                                                   

}

window.addEventListener("load", loadEvent)

/* submit nem a gombon hanem a formon hívódik meg ezért kell egy prevendtdefault, amivel felülírjuk az alapbeállításokat */
/*
ha az aktuális inputnak a name attribútuma "firstName" csak akkor írja bele ebbe a div-be a tartalmat
egy ifet beleírni*/