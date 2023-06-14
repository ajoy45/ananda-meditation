export const storeUserInDatabase=user=>{
    const currentUser={
       email:user.email,
       image:user.photoURL,
       name:user.displayName
    }
    fetch(`https://assingement-12-server.vercel.app/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}
export const makeAdmin=async email=>{
    const currentUser={
       role:"admin"
    }
    return await fetch(`https://assingement-12-server.vercel.app/users/${email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    
}
export const makeInstructor=async email=>{
    const currentUser={
       role:"instructor"
    }
    return await fetch(`https://assingement-12-server.vercel.app/users/${email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    
}
export const makeAmin=async email=>{
    const currentUser={
       role:"admin"
    }
    return await fetch(`https://assingement-12-server.vercel.app/users/${email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    
}
export const getRole=async (email)=>{
    const res=await fetch(`https://assingement-12-server.vercel.app/users/${email}`);
    const user=await res.json();
    return user?.role
 }
 