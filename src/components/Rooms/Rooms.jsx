import React, { useEffect, useState } from 'react';
import SingleRoom from '../SingleRoom/SingleRoom';

const Rooms = () => {
    const [hotelRoom, setHotelRoom] = useState([])
    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => setHotelRoom(data))
    }, [])

    return (
        <div className='mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    hotelRoom.map((room) => <SingleRoom
                        room={room}
                        key={room.id}
                    ></SingleRoom>)
                }
            </div>

        </div>
    );
};

export default Rooms;