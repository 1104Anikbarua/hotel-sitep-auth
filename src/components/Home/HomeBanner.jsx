import React from 'react';
import bg from '../../assets/hotelbg.png'
const HomeBanner = () => {
    return (
        <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${bg})` }}>

            <div className='flex items-center justify-center mt-20 h-full'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold text-yellow-600'>Hotel Dubai Inn</h1>
                    <h1 className='text-5xl font-bold text-teal-600'>Not Hotel Its Your House</h1>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;