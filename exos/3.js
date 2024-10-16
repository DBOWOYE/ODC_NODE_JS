const btn = document.getElementById("btn")

btn.addEventListener('click', ()=>{
    document.getElementById("resultat").textContent = document.getElementById("txt").value
})