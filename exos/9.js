const btn = document.getElementById("btn");
const nom = document.getElementById("nom")
const email = document.getElementById("email")


btn.addEventListener("click", (e)=> {
    e.preventDefault();
    
    if (nom.value === ""){
        document.getElementById("errorNom").innerText = "Le champ nom est vide !"
    }
    else if (email.value === ""){
        document.getElementById("errorEmail").innerText = "Le champ email est vide !"
    } 
    else if (!email.value.includes('@odc.com')){
        document.getElementById("errorEmail").innerText = "Cette adresse email n'est pas de ODC !"
    }
    else {
        let li = document.createElement('li');
        li.textContent = 'Nom : '+ nom.value + ' email : '+ email.value

        document.getElementById('resultat').appendChild(li)
    }

    

   
});
