import React from 'react';
import { BiBed } from 'react-icons/bi'
import { MdEmojiPeople, MdFamilyRestroom, MdPeople } from 'react-icons/md'
import { Link } from 'react-router-dom';

const SingleRoom = (props) => {
    const { room } = props;
    // console.log(room)
    return (
        <div className='w-full max-w-sm bg-white shadow-md px-10 py-5'>
            <p className='text-xl'>{room?.name}</p>
            <img className='w-80 h-60 mx-auto' src={room?.img} alt="" />
            <p>{room?.Desc}</p>

            <div className='flex items-center justify-between text-blue-500'>
                <p className='flex items-center text-xl mr-5'><BiBed className='mr-2'></BiBed>{room?.bed}</p>
                <p className='text-xl ml-5'>
                    {
                        room?.stay === "1" && <MdEmojiPeople></MdEmojiPeople>

                    }
                    {
                        room.stay === "2" && <MdPeople></MdPeople>
                    }

                    {
                        room.stay === "4" && <MdFamilyRestroom></MdFamilyRestroom>
                    }
                </p>
                <p className='ml-5'>$ {room.price}</p>

                <Link to={`/${room.id}`} className='text-xl text-white w-28 bg-blue-600 text-center rounded'>Book</Link>
            </div>

        </div>
    );
};

export default SingleRoom;