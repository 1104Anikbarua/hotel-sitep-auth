import React, { useContext, useState } from 'react';
import { RoomContext } from './AuthProvider';
import { HiEye, HiEyeSlash } from 'react-icons/hi2'

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('');
    const { createUser, userName } = useContext(RoomContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (confirmPassword !== password) {
            setError('Password DO Not match')
            return;
        }
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                userName(name)
                    .then(() => {
                        console.log('User Name Successfully Added')
                    })
                    .catch(() => {
                        console.log('An error occured')
                    })
            })
            .catch((error) => {
                const errorMessage = error.code;
                console.log(errorMessage)
            })

        console.log(name, email, password, confirmPassword)
        event.target.reset();
    }

    return (
        <div className='mt-20 bg-white shadow-lg w-[500px] max-w-xl mx-auto h-[100vh] flex items-center justify-center'>
            <form action="" onSubmit={handleSignUp}>
                <div>
                    <label className='text-lg block' htmlFor="name">Name</label>
                    <input className='bg-blue-200 w-[300px] max-w-sm rounded outline-none' type="name" name="name" id="name" />
                </div>
                <div>
                    <label className='text-lg block' htmlFor="email">Email</label>
                    <input className='bg-blue-200 w-full max-w-xs rounded outline-none' type="email" name="email" id="email" />
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

                <div>
                    <label className='text-lg block' htmlFor="confirm password">Confirm Password</label>

                    <input className='bg-blue-200 w-full max-w-xs rounded outline-none'

                        type={`${show ? "text" : "password"}`}

                        name="confirmPassword" id="confirmPassword" />
                </div>

                <input
                    className='bg-blue-700 
                    text-white font-semibold
                    w-full rounded mt-3'
                    type="submit" value="Sign up" />
            </form>
        </div>
    );
};

export default SignUp;