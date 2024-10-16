const btn = document.getElementById('btn');
const table = document.getElementById('tbody');

let compteur = 0


btn.addEventListener('click', (e) => {
    e.preventDefault();
    let tache = document.getElementById('tache').value;
    let priorite = document.getElementById('priorite').value;
    let date = document.getElementById('date').value;
    let status = document.getElementById('status').value;
    
    if(tache != "" & priorite !="" & date !=""){
        compteur++;

        createLine(compteur, tache, priorite, date, status)
        viderChamps()
    }
    else {
        alert("Veuillez remplir les champs du formulaire !")
    }
       
    

})

function createLine(compteur, tache, priorite, date, status){
    let td_compteur = document.createElement('td');
        td_compteur.innerText = compteur

    let td_tache = document.createElement('td');
        td_tache.innerText = tache
    let td_priorite = document.createElement('td');
        td_priorite.innerText = priorite;

    let td_date = document.createElement('td');
        td_date.innerText = date;

    let td_status = document.createElement('td'); 
        td_status.innerText = status;
       
    let tr = document.createElement('tr');
        tr.appendChild(td_compteur)
        tr.appendChild(td_tache)
        tr.appendChild(td_priorite)
        tr.appendChild(td_date)
        tr.appendChild(td_status)

    table.appendChild(tr)
}

function viderChamps(){
    document.getElementById('tache').value = ""
    document.getElementById('date').value = ""
    document.getElementById('status').selectedIndex = 0;
    document.getElementById('priorite').selectedIndex = 0;

}