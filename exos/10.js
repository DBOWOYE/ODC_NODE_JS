const paragraphe = document.getElementById("paragraphe");

paragraphe.addEventListener('mouseover', ()=> {
    paragraphe.style.color = "red";
    paragraphe.style.fontWeight = "bold";
});

paragraphe.addEventListener('mouseout', ()=> {
    paragraphe.style.color = "black";
    paragraphe.style.fontWeight = "normal";
});
