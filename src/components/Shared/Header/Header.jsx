import React, { useContext, useState } from 'react';
import logo from '../../../assets/hotellogo.jpg';
import { Link } from 'react-router-dom';
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { RoomContext } from '../../Auth/AuthProvider';
const Header = () => {
    const [show, setShow] = useState(false);
    const { user, logOutUser } = useContext(RoomContext)



    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('user successfully logout')
            })
            .catch(() => {
                console.log('An error Occured')
            })
    }
    return (
        <div className={`flex items-center justify-between bg-white shadow-md fixed top-0 right-0 left-0 h-20`}>
            <div>
                <img className='w-20 h-20' src={logo} alt="logo" />
            </div>

            <ul className={`flex items-center flex-col absolute duration-700 w-full bg-white shadow-md md:flex-row md:justify-end md:static md:shadow-none ${show ? 'top-[82px]' : '-top-96'}`}>
                <li className='mr-5'>
                    <Link className='text-xl font-medium text-blue-500' to={'/'}>Home</Link>
                </li>

                <li className='mr-5'>
                    <Link className='text-xl font-medium text-blue-500' to={'/rooms'}>Rooms</Link>
                </li>


                {
                    user
                        ?
                        <li className='mr-5'>
                            {user.displayName}
                            <Link onClick={() => handleLogOut()} className='text-xl font-medium text-blue-500' to={'/login'}>Logout</Link>
                        </li>
                        :
                        <li className='mr-5'>
                            <Link className='text-xl font-medium text-blue-500' to={'/login'}>Login</Link>
                        </li>
                }
                {
                    !user
                    &&
                    <li className='mr-5'>
                        <Link className='text-xl font-medium text-blue-500' to={'/register'}>SignUp</Link>
                    </li>
                }

            </ul>

            <div className='md:hidden' onClick={() => setShow(!show)}>
                {

                    show ?
                        <HiXMark className='w-10 h-10 cursor-pointer text-blue-500'></HiXMark>
                        :
                        <HiBars3 className='w-10 h-10 cursor-pointer text-blue-500'></HiBars3>
                }
            </div>

        </div>
    );
};

export default Header;