let content = document.querySelector(".container")

let titre = document.createElement('h5')
titre.innerText = "FORMULAIRE DE CREATION"
titre.setAttribute("class", "mt-2")

content.appendChild(titre)


const prescrption = createPrescription()
let bt_enregistrer = createButton("Enregistrer")

let form = document.createElement("form")

form.appendChild(prescrption)

content.appendChild(form)






function createPrescription(){

    const prescription = document.createElement("div");
    prescription.style = "display: flex; align-items: end; gap: 3px;"


    let nom = createFormElement("Nom complet");
    let quantite = createFormElement("Quantite", "number");
    let posologie = createFormElement("Posologie", "text");
    let description = createFormElement("Description", "text");

    prescription.appendChild(nom)
    prescription.appendChild(quantite)
    prescription.appendChild(posologie)
    prescription.appendChild(description)
    prescription.appendChild(bt_enregistrer)
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

