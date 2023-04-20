import React, { useContext, useEffect, useState } from 'react';
import { RoomContext } from './AuthProvider';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const { user, signInUser } = useContext(RoomContext);
    let from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.code;
                console.log(errorMessage)
            })
        event.target.reset();
    }

    // let from = location.state?.from?.pathname || '/';

    // useEffect(() => {
    //     if (user) {
    //         navigate(from, { replace: true })
    //     }
    // }, [user, navigate, from])

    return (
        <div className='mt-20 bg-white shadow-lg w-[500px] max-w-xl mx-auto h-[100vh] flex items-center justify-center'>
            <form action="" onSubmit={handleLogin}>

                <div>
                    <label className='text-lg block' htmlFor="email">Email</label>
                    <input className='bg-blue-200 w-[300px] rounded outline-none' type="email" name="email" id="email" />
                </div>

                <div className='relative'>
                    <label className='text-lg block' htmlFor='password'>
                        Password
                    </label>
                    <input
                        className='bg-blue-200 w-full max-w-xs rounded outline-none'
                        type={`${show ? 'text' : 'password'}`}
                        name='password'
                        id='password'
                    />
                    {
                        show
                            ?
                            <HiEyeSlash
                                className='w-5 h-5 absolute top-3/4 -translate-y-1/2 right-2 cursor-pointer'
                                onClick={() => setShow(!show)}>
                            </HiEyeSlash>
                            :
                            <HiEye
                                className='w-5 h-5 absolute top-3/4 -translate-y-1/2 right-2 cursor-pointer'
                                onClick={() => setShow(!show)}
                            />
                    }
                </div>



                <input
                    className='bg-blue-700 
                    text-white font-semibold
                    w-full rounded mt-3'
                    type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;