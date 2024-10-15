let mots = ["Bonjour", "Bonsoir", "Aurevoir", "Demain", "Lundi", "Dimanche", "Conakry", "Orange", "Digital", "Center"]

let i = Math.floor(Math.random()* mots.length)

let mot = mots[i]
let deviner = "***" + mot.substring(3)

let val = prompt("Deviner le mot suivant : " + deviner)

if (val.toLowerCase === mot.toLowerCase){
    console.log("Vous avez deviné juste,  le mot est : "+ mot);
}
else {
    console.log("Essayez encore !");
}




