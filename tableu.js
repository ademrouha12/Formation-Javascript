const mon_tableau = ["Bannane", "Pomme", "Serise", 4 ]
console.log(mon_tableau, "Mon 1 tableau")

console.log(mon_tableau.length)

//// 2ème méthode

const cars = new Array ("Mercedes", "Audi", "Toyota")
console.log(cars)

console.log(mon_tableau.join("/"))

let voitures = cars.pop()
console.log(voitures)
console.log(cars)

let fruits = mon_tableau.push("Kiwi")
console.log(mon_tableau)

console.log(mon_tableau[0])

mon_tableau [0] = "Poire"
console.log(mon_tableau)

const boys = ["Zidane", "Rayane", "Amine"]
const girls = ["Imen", "Melissa", "Romaissa"]
const children = boys.concat(girls)
console.log(children)

const semaine = ["Lundi ", "Marrd ", "Mercredi ", "Jeudi ", "Vendredi ", "Samedi ", "Dimance "]
console.log(semaine)
let week = semaine.pop()
semaine [1] = "Mardi "
let week1 = semaine.push("Dimanche ")

console.log(semaine.join("* "))

const fruits1 = ["Bannane", "Orange", "Pomme", "Mangue"]
fruits1.splice(2,0,"Citron", "Kiwi")
console.log(fruits1)

fruits1.splice(3,2)
console.log(fruits1)

const fruits2 = ["Bannane", "Orange", "Citron", "Mangue", "Pomme", "Poire"]
console.log(fruits2)
const slicex = fruits2.slice(2)
console.log(slicex)

const fruits3 = ["Bannane", "Orange", "Citron", "Mangue", "Pomme", "Poire"]
console.log(fruits3)
const slicex1 = fruits3.slice(1,3)
console.log(slicex1)


const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
const nombres = numbers.pop()
console.log(numbers)
const slicex2 = numbers.slice(2,4)
console.log(slicex2)
const slicex3 = numbers.slice(3,4)
console.log(slicex3)

