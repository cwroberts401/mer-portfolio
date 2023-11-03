import React from "react";
import { useState } from 'react';
import Back from "../../layout/BackButton";

const photos = [{photoURL:'01.png', alt:'Spring Art Direction', id:'1'}, {photoURL:'02.png', alt:'Spring Art Direction', id:'2'}, {photoURL:'Shot_19_LIVELY_Q1_04554_EDIT.jpg', alt:'Spring Art Direction', id:'3'}, {photoURL:'Shot_19_LIVELY_Q1_04649.jpg', alt:'Spring Art Direction', id:'4'}, {photoURL:'Shot_19_LIVELY_Q1_04658.jpg', alt:'Spring Art Direction', id:'5'}, {photoURL:'Shot_22_LIVELY_Q1_05368.jpg', alt:'Spring Art Direction', id:'6'}, {photoURL:'Shot_46_LIVELY_Q1_09721.jpg', alt:'Spring Art Direction', id:'7'}, {photoURL:'Shot_46_LIVELY_Q1_09818.jpg', alt:'Spring Art Direction', id:'8'}, {photoURL:'Shot_46_LIVELY_Q1_09908.jpg', alt:'Spring Art Direction', id:'9'}]

function Spring() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-4 md:col-span-8':'col-span-4 md:col-span-8'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/spring/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible transition-all -mt-4 mr-6 self-end ${enlarge === photo.id?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-2 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Spring '23 Art Direction for Lively</h2>
                <p className='text-sm mb-10'>A  vibrant and captivating spring capsule that truly encapsulates the essence of the season. This project was a celebration of nature's rebirth, featuring a harmonious blend of color, light, and fresh blooms. I collaborated closely with a talented team of photographers, stylists, and models to bring this vision to life, ensuring that every frame radiated the beauty and energy of spring. The result is a collection of images that evokes a sense of renewal and optimism, with the natural world as the backdrop and a meticulous attention to detail. This spring capsule demonstrates my ability to create & execute creative concepts from trend analysis & product design, ultimately creating visually compelling and impactful content.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Spring