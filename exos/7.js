
const btn = document.getElementById("btn");





setInterval(()=> {
    let heure = document.getElementById("heure");
    const maintenant = new Date();
    const time = maintenant.toLocaleTimeString(); 

    heure.innerText = time
}, 1000);