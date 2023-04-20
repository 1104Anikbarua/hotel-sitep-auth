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
            <div>
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