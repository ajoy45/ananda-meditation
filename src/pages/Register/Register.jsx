import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import showImg from '../../../src/assets/logo/show_icon.png'
import googleImg from '../../../src/assets/google.png'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { storeUserInDatabase } from '../../api/auth';



const Register = () => {
    const { signInWithGoogle,setLoading,createUser,updateUserProfile } = useContext(AuthContext);
    const[error,setError]=useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        
        if(data.password<6){
            setError('password is less than 6 characters');
            return
        }
        if(!/[A-Z]/.test(data.password)){
             setError("don't have a capital letter");
             return
        }
        if(!/[!@#$%^&*()]/.test(data.password)){
            setError("don't have a special character");
            return
        }
        if(data.password!==data.confirm){
            setError('please confirm password');
            return
        }
        createUser(data.email,data.password)
        .then(result=>{
            toast.success('create user successfully')
            updateUserProfile(data.name,data.photoURL)
            .then(() => {
                // user save to database
                storeUserInDatabase(result.user) 
               toast.success('update user profile')
              
           })
           .catch(error => {
               toast.error('error occur for updating user')
               
           })
            console.log(result.user)
        })
        .catch(err=>{
            toast.error('problem to create user')
            setError(err.message)
            setLoading(false)
        })

    };
    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                storeUserInDatabase(result.user)
                toast.success('google login successfully')
            })
            .catch(err=>{
                toast.error('google login problem!!')
                  setLoading(false)
            })
    }
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
                                                <p className='text-red-500'>{error}</p>
                                            </div>
                                             {/* <!--confirm password--> */}
                                             <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type={passwordVisible ? 'text' : 'password'}
                                                    placeholder="Confirm Password" className='border border-1 w-full py-2 border-sky-300'{...register("confirm", { required: true })} />
                                                <img onClick={togglePasswordVisibility} className='w-5 absolute top-3 right-0 cursor-pointer' src={showImg} alt="" />
                                                <p className='text-red-500'>{error}</p>
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
                                                className="flex flex-row items-center justify-center cursor-pointer">
                                                <p className="mb-0 mr-4 text-lg">Sign in with Google</p>

                                                {/* <!--Google login --> */}

                                                <img onClick={handelGoogleSignIn} src={googleImg} alt="" />

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