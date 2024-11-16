const titre = document.getElementsByClassName("title")
console.log(titre, "Récupération des éléments qui ont le nom de la classe title")

const titre1 = document.getElementsByTagName("h2")
console.log(titre1, "Récupération des éléments qui ont le nom de la balise h2")

const demo = document.getElementById("demo")
console.log(demo, "Récupération des éléments qui ont le id demo")

document.getElementById("demo").style.color="green"

// document.getElementById("demo").innerText="text modifiè avec inner text"

//// document.getElementById("demo").innerHTML="<h2>Texte modifiè avec inner html</h2>"

function salutation(){

  if (demo.innerHTML === "Livre pour tout le monde") {
    demo.innerHTML = "Bonjour tout le monde"
    
  }
  else {

    demo.innerHTML = "Livre pour tout le monde"
  
  }
}

demo.onclick= salutation

const myselector = document.querySelector("#Liste-livres li:nth-child(2) .name" )
console.log(myselector, "quiryselector permet le premier élément qui satisfait le selector spécifiè")

const myselector1 = document.querySelectorAll("#Liste-livres .name")
console.log(myselector1)