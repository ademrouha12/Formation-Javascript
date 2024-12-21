

 const base_url = "https://jsonplaceholder.typicode.com"

// const get_users = () => {
//   fetch(`${base_url}/users`)
//   .then((response)=> {
//     return response.json()


//   })
//   .then((data)=>{
//     console.log(data)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// }
// get_users()
const get_users = async () => {
  try{
    const response = await fetch(`${base_url}/users`)
    const data = await response.json()
    console.log(data)
  }
  catch(error){
    console.log(error)

  }
}
get_users()