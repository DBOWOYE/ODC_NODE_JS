
const btnClick = document.getElementById("btnClick");


let i = 0;

btnClick.addEventListener("click", function(){
    i++
    let compteur = document.getElementById("compteur");
    compteur.textContent = i
});