import React from "react";
import { useState } from 'react';
import Back from "../../layout/BackButton";

const photos = [{photoURL:'03_accessories-01.jpg', alt:'accessory collection design', id:'1'},{photoURL:'04_accessories.jpg', alt:'accessory collection design', id:'2'},{photoURL:'05_accessories.jpg', alt:'accessory collection design', id:'4'},{photoURL:'06_accessories.jpg', alt:'accessory collection design', id:'5'},{photoURL:'07_accessories.jpg', alt:'accessory collection design', id:'6'},{photoURL:'08_accessories.jpg', alt:'accessory collection design', id:'7'},{photoURL:'09_accessories.jpg', alt:'accessory collection design', id:'8'}]

function Accessories() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-4 md:col-span-8':'col-span-4 md:col-span-8'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/accessories/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible -mt-1 mr-6 self-end ${enlarge === photo.id?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-4 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Accessories for Lively</h2>
                <p className='text-sm'>Led design, sourcing, and production for a variety of seasonal accessories & merchandise ranging from hair clips & scrunchies, to tote bags & eye masks.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Accessories