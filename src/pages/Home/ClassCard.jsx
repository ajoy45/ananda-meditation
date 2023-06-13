import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { addBooking } from '../../api/booking';

const ClassCard = ({ item }) => {
  const{user,role}=useContext(AuthContext);
  const navigate=useNavigate()
  const handelSelect=()=>{
    if(!user){
      toast.error('log in before selecting the course')
       navigate('/login')
    }else{
      toast.success('select class successfully')
      addBooking(item).then(data=>console.log(data))
    }
  }
  return (
    <div className={`card w-full my-12  shadow-xl ${item.availableSeat==0?"bg-red-500": "bg-base-100"}`}>
      <figure className="px-10 pt-10">
        <img src={item.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title">Instructor Name:{item.instructorName}</h2>
        <p>Class Name:{item.className}</p>
        <p>Available Seats:{item.availableSeat}</p>
        <p>price:${item.price}</p>
        <div className="card-actions">
          <button disabled={item.availableSeat==0?true:role==="admin"?true:role==="instructor"?true:false}   onClick={handelSelect} className="px-4 py-2 bg-[#eec03f] rounded-sm">Select </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;