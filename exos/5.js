const btn = document.getElementById("btn")
const list = document.querySelector("ol")

btn.addEventListener('click', ()=>{
    let li = document.createElement("li");
    li.innerText = document.getElementById("txt").value
   list.appendChild(li)

   document.getElementById("txt").value =""
   
})
