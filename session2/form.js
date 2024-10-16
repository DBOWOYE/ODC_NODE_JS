let content = document.querySelector(".container")
const form = document.createElement("form");


const btn_plus = document.getElementById("btnAjouter");
let i = 1;

btn_plus.addEventListener('click', () => {
    createPrescription();
    
    // let p = document.createElement("p")
    // p.innerText = "Bonjour ODC " + i + " fois"
    // i++;
    

    // content.appendChild(p)
    
});

content.appendChild(form);

function createPrescription(){
    const prescription = document.createElement("div");
    prescription.style = "display: flex; align-items: end; gap: 3px;"


    const nom = createFormElement("Nom complet");
    const quantite = createFormElement("Quantite", "number");
    const posologie = createFormElement("Posologie", "text");
    const description = createFormElement("Description", "text");

    prescription.appendChild(nom)
    prescription.appendChild(quantite)
    prescription.appendChild(posologie)
    prescription.appendChild(description)

    form.appendChild(prescription)
}


function createFormElement(nom, type="text"){
    const label = document.createElement("label");
    label.innerText = nom;
    label.setAttribute("class", "form-label")
    const input = document.createElement("input");
        input.type = type;
        input.setAttribute("class", "form-control")

    const div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(input);

    return div
}

function createButton(nom){
    const button = document.createElement('button')
    button.innerText = nom
    button.setAttribute("class", "btn btn-success mt-2")

    return button
}

