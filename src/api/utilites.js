export const makeApproved=async id=>{
    const currentStatus={
       status:"Approved"
    }
    return await fetch(`http://localhost:5000/class/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentStatus)
    })
    .then(res=>res.json())
    
}