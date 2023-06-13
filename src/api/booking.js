export const addBooking= async bookingData=>{
    
    const res=await fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(bookingData)
    })
    const data=await res.json()
    return data
}