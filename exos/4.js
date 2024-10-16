const btn = document.getElementById("btnAfficher")

let hidden = false;

btn.addEventListener('click', ()=>{
    const txt = document.getElementById("paragraphe");

    if (hidden){
       
        txt.style.display = "none"
    }
    else {
        txt.style.display = "block"
    }
    hidden = !hidden;
})
