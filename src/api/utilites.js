export const makeStatus=async(id,text)=>{
    const currentStatus={
       status:text
    }
    return await fetch(`https://assingement-12-server.vercel.app/class/${id}`,{
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
    return await fetch(`https://assingement-12-server.vercel.app/class/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentStatus)
    })
    .then(res=>res.json())
    
}