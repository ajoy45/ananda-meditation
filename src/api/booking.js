export const addBooking= async bookingData=>{
    
    const res=await fetch('https://assingement-12-server.vercel.app/booking',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(bookingData)
    })
    const data=await res.json()
    return data
}