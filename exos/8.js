
let zoom = false;
let image = document.getElementById("photo")
image.addEventListener("click", ()=> {
    
    if (zoom) {
        image.style.transform = 'scale(1)';
    } else {
        image.style.transform = 'scale(1.5)';
    }

    zoom = !zoom
});