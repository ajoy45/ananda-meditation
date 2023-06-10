import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import showImg from '../../../src/assets/logo/show_icon.png'
import googleImg from '../../../src/assets/google.png'
import { useForm } from 'react-hook-form';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="gradient-form h-full">
            <div className="container h-full p-10">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div
                            className="block rounded-lg bg-white shadow-lg ">
                            <div >
                                {/* <!-- Left column container--> */}
                                <div className="px-4 md:px-0 lg:w-6/12 mx-auto">
                                    <div className="md:mx-6 md:p-12">
                                        {/* <!--Logo--> */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo" />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                We are The Meditation Team
                                            </h4>
                                        </div>

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <p className="mb-4">Please Register </p>
                                            {/* <!--name field--> */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="text"
                                                    placeholder="User Name" className='border border-1 w-full py-2 border-sky-300'{...register("name")} />

                                            </div>
                                            {/* <!--email field--> */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="email"
                                                    placeholder="email" className='border border-1 w-full py-2 border-sky-300'{...register("email", { required: true })} />

                                            </div>

                                            {/* <!--Password input--> */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type={passwordVisible ? 'text' : 'password'}
                                                    placeholder="Password" className='border border-1 w-full py-2 border-sky-300'{...register("password", { required: true })} />
                                                <img onClick={togglePasswordVisibility} className='w-5 absolute top-3 right-0 cursor-pointer' src={showImg} alt="" />
                                            </div>
                                            {/* <!--photo url--> */}
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="text"
                                                    placeholder="photoURl" className='border border-1 w-full py-2 border-sky-300'{...register("photoURL")} />

                                            </div>

                                            {/* <!--Submit button--> */}
                                            <div>
                                                <input type="submit" value="Register" className='w-full bg-[#eec03f] py-3 text-white mb-3' />
                                            </div>
                                            {/* google login */}
                                            <div
                                                className="flex flex-row items-center justify-center ">
                                                <p className="mb-0 mr-4 text-lg">Sign in with Google</p>

                                                {/* <!--Google login --> */}

                                                <img src={googleImg} alt="" />

                                            </div>
                                            <div className='text-red-500'>
                                                {errors.email && <span>Email field is required</span>}
                                            </div>
                                            <div className='text-red-500'>
                                                {errors.password && <span>Password field is required</span>}
                                            </div>

                                            {/* <!--Register button--> */}
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Already  have an account?</p>
                                                <Link to='/login'>
                                                    <button
                                                        type="button"
                                                        className="px-3 py-2 bg-[#eec03f] rounded-lg text-white"
                                                    >
                                                        Login
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;