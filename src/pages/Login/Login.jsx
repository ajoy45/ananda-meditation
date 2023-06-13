import React, { useContext, useState } from 'react';
import googleImg from '../../../src/assets/google.png'
import showImg from '../../../src/assets/logo/show_icon.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { storeUserInDatabase } from '../../api/auth';


const Login = () => {
    const { signInWithGoogle,setLoading,signIn } = useContext(AuthContext)
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.email)
        signIn(data.email,data.password)
        .then(result=>{
            navigate(from, { replace: true });
        }).catch(error=>{
            console.log(error)
        })
    };
    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                storeUserInDatabase(result.user)
                toast.success('google login successfully')
                navigate(from, { replace: true });
            })
            .catch(err=>{
                toast.error('google login problem!!')
                  setLoading(false)
            })
    }
    return (
        <section className="h-screen">
            <div className="h-full">
                {/* <!-- Left column container with background--> */}
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div
                        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="image" />
                    </div>

                    {/* <!-- Right column container --> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <!--Sign in section--> */}
                            <div
                                className="flex flex-row items-center justify-center cursor-pointer">
                                <p className="mb-0 mr-4 text-lg">Sign in with Google</p>

                                {/* <!--Google login --> */}

                                <img onClick={handelGoogleSignIn} src={googleImg} alt="" />

                            </div>

                            {/* <!-- Separator between social media sign in and email/password sign in --> */}
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    Or
                                </p>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="" >
                                <input type="email"  {...register("email", { required: true })} placeholder='Email ' className='border border-1 border-sky-200 py-2 mb-3 rounded-xl w-full' />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="relative " >
                                <input type={passwordVisible ? 'text' : 'password'} {...register("password", { required: true })} placeholder='Password' className='border border-1 border-sky-200 py-2 mb-3 rounded-xl w-full ' />
                                <img onClick={togglePasswordVisibility} className='w-5 absolute top-3 right-0 cursor-pointer' src={showImg} alt="" />
                            </div>

                            <div className='text-red-500'>
                                {errors.email && <span>Email field is required</span>}
                            </div>
                            <div className='text-red-500'>
                                {errors.password && <span>Password field is required</span>}
                            </div>


                            {/* <!-- Login button --> */}
                            <div className="text-center lg:text-left">
                                <input type="submit" value="Login" className='px-5 py-2 bg-[#eec03f] text-white rounded-lg' />

                                {/* <!-- Register link --> */}
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Don't have an account?
                                    <Link
                                        to='/register'
                                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >Register</Link>

                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;