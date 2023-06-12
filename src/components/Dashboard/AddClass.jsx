import React, { useContext } from 'react';
import { imageUpload } from '../../api/imageUpload';
import { addClass } from '../../api/class';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';

const Addclass = () => {
    const{user}=useContext(AuthContext)
    const handelSubmit=(e)=>{
        e.preventDefault();
        const className=e.target.name.value;
        const instructorName=e.target.instructor.value;
        const instructorEmail=e.target.email.value;
        const availableSeat=e.target.seat.value;
        const price=e.target.price.value;
        const image=e.target.image.files[0];
        imageUpload(image).
        then(data=>{
            const classData={
                className,instructorName,email:instructorEmail,availableSeat,price:parseFloat(price),image:data.data.display_url,status:"pending"
            }
            console.log(classData)
            addClass(classData).then(data=>{
                console.log(data)
                toast.success('class added to database')
            }).catch(error=>{
                toast.error('class added to database error')
            })
        })
        .catch(error=>{
             console.log(error.message)
        })

        // console.log(className,image,instructorName,instructorEmail,availableSeat,price)
    }
    return (
        <div>
            <div
                className="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto mt-5">
                <form onSubmit={handelSubmit}>
                    {/* <!--Name input--> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input className='w-full border border-sky-300 py-2'
                            type="text"
                            name='name'
                            placeholder="Class Name" />
                    </div>

                    {/* <!--image upload input--> */}
                    <div className="relative mb-6">
                        <label>

                            <input 
                                className='text-sm cursor-pointer w-36 hidden'
                                type='file'
                                name='image'
                                id='image'
                                accept='image/*'
                                hidden
                            />
                            <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold   cursor-pointer p-1 px-3 hover:bg-rose-500 text-center'>
                                Upload Image
                            </div>
                        </label>

                    </div>

                   {/* instructor Name */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input className='w-full border border-sky-300 py-2'
                            type="text"
                            name='instructor'
                            value={user?.displayName}
                            placeholder={user?.displayName} />
                    </div>
                      {/* instructor email */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input className='w-full border border-sky-300 py-2'
                            type="email"
                            name='email'
                            readOnly
                            value={user?.email}
                            placeholder={user?.email} />
                    </div>
                    {/* available seats */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input className='w-full border border-sky-300 py-2'
                            type="text"
                            name='seat'
                            placeholder="available seats" />
                    </div>
                    {/* price */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input className='w-full border border-sky-300 py-2'
                            type="text"
                            name='price'
                            placeholder="Price" />
                    </div>

                  
                    {/* <!--Submit button--> */}
                    <button
                        type="submit"
                        className="bg-[#eec03f] w-full py-3 text-white"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Add Class
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addclass;