import React from "react";
import { useState } from 'react';
import Back from "../../layout/BackButton";

const photos = [{photoURL:'modal-01.jpg', alt:'modal collection design', id:'1'}, {photoURL:'modal-02.jpg', alt:'modal collection design', id:'2'}]

function Modal() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-4 md:col-span-8':'col-span-4 md:col-span-8'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/modal/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible -mt-4 mr-6 self-end ${enlarge === '0'?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-2 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Fall Modal Collection for Lively</h2>
                <p className='text-sm mb-10'>Designed & concepted seasonal lingerie development from sketches through to color palettes & final production. Fall modal collection highlighting warm cozy fabrication in complementary silhouettes & colors.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Modal