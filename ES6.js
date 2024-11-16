function exemplevar() {
  var x=5
  if (true){
    var x=10
    console.log(x + " -Mon X var")
  } 
  console.log(x)
}
exemplevar()

function exemplelet() {
  let y=5
  if (true){
    let y=10
    console.log(y + " -Mon Y var")
  } 
  console.log(y, "résultat final")
}
exemplelet()


function exempleconst () {

  const z = 10
  
  console.log("la valeur de z est", z)
}
exempleconst()