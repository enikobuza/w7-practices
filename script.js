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
    <label>${label}</label><br>
    <input type="${type}" name="${name}">
    </div>`;
}


const selectElement = (type, name, label, selectOptions) => {
    let optionElements = "";
    for (const option of selectOptions) {
        optionElements += `
            <option>${option}</option>
        `;
    }
    return `
    <div>
        <label>${label} </label>
    
        <${type} name="${name}">
            ${optionElements}
        </${type}>
    </div>`
}

/*
const formElement = '<form id="form">' + inputElement("text", "firstName", "Keresztneved") + inputElement("file", "profilePic", "Profilképed") + inputElement("email", "personal", "E-mail címed") + inputElement("checkbox", "newsLetter", "Hírlevelet kérek") + inputElement("checkbox", "terms", "Elfogadod a felhasználási feltételeket?") + selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"]) + '<button>OK</button>'
    

*/
const formElement = `
        <form id="form">
            ${inputElement("text", "firstName", "Keresztneved")}
            ${inputElement("email", "personal", "E-mail címed")}
            ${inputElement("file", "profilePic", "Profilképed")}
            ${inputElement("checkbox", "newsLetter", "Hírlevelet kérek")}
            ${inputElement("checkbox", "terms", "Elfogadod a felhasználási feltételeket?")}
            ${selectElement("select", "where", "Hol hallottál rólunk?", ["válassz az alábbiakból", "internetről", "ismerőstől", "egyéb"])}
            <button>CREATE ACCOUNT</button>
            <div></div>
        </form>
`;

const formSubmit = (event) => {
    event.preventDefault(); /* ne töltse újra az oldalt */
    console.log(event);
    const et = event.target;
    et.classList.add("submitted");
    let etValue = et.querySelector(`select[name="where"]`).value;
    console.log(etValue);

}

const inputEvent = (event) => {
    console.log(event.target.value);
    if (event.target.getAttribute("name") === "firstName" ) {
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