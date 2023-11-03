import React from "react";
import { useState } from 'react';
import Back from "../../layout/BackButton";

const photos = [{photoURL:'00.png', alt:'holiday Art Direction', id:'1'}, {photoURL:'01.png', alt:'holiday Art Direction', id:'2'}, {photoURL:'02.png', alt:'holiday Art Direction', id:'3'}, {photoURL:'jholt_230914_LivelyHoliday23_1066_HiRes_1.jpg', alt:'holiday Art Direction', id:'4'}, {photoURL:'jholt_230914_LivelyHoliday23_2208_HiRes.jpg', alt:'holiday Art Direction', id:'5'}, {photoURL:'jholt_230914_LivelyHoliday23_2285_HiRes.jpg', alt:'holiday Art Direction', id:'6'}, {photoURL:'jholt_230914_LivelyHoliday23_2423_HiRes.jpg', alt:'holiday Art Direction', id:'7'}]

function Holiday() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-4 md:col-span-8':'col-span-4 md:col-span-8'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/holiday/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible transition-all -mt-4 mr-6 self-end ${enlarge === photo.id?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-2 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Holiday '23 Art Direction for Lively</h2>
                <p className='text-sm mb-10'>Holiday 2023 features a festive and enchanting holiday photoshoot that truly captures the magic of the season. This project was a celebration, where I collaborated closely with a talented team of photographers, stylists, and models to bring the joy and warmth of this special time to life. Every detail was meticulously curated to infuse a sense of merriment into every frame. The result is a collection of images that radiate the holiday spirit, evoking a feeling of celebration, self confidence and joy. This holiday capsule showcases my ability to create visually captivating and emotionally resonant narratives, through product & imagery conveying the enchantment and magic that defines this cherished time of year.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Holiday