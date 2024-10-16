const btn = document.getElementById("btn");

const couleurs = ['#FF69B4', '#008000', '#FF0000', '#FFFF00', '#0000FF'];


btn.addEventListener("click", ()=>{
    const couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
    document.body.style.backgroundColor = couleurAleatoire;
});

