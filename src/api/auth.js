export const storeUserInDatabase=user=>{
    const currentUser={
       email:user.email
    }
    fetch(`http://localhost:5000/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}
// export const becomeHost=async email=>{
//     const currentUser={
//        role:"admin"
//     }
//     return await fetch(`http://localhost:5000/users/${email}`,{
//         method:'PUT',
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify(currentUser)
//     })
//     .then(res=>res.json())
    
// }