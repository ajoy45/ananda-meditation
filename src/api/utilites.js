export const makeStatus=async(id,text)=>{
    const currentStatus={
       status:text
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
export const makeFeedback=async(id,text)=>{
    const currentStatus={
       feedback:text
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