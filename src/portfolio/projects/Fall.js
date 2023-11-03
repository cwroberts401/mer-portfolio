import React from "react";
import { useState } from 'react';
import Back from "../../layout/BackButton";

const photos = [{photoURL:'00.png', alt:'fall Art Direction', id:'1'}, {photoURL:'01.png', alt:'fall Art Direction', id:'2'}, {photoURL:'03.png', alt:'fall Art Direction', id:'3'}, {photoURL:'jholt_230914_LivelyHoliday23_1351_HiRes_3.jpg', alt:'fall Art Direction', id:'4'}, {photoURL:'jholt_230914_LivelyHoliday23_1470_HiRes_1.jpg', alt:'fall Art Direction', id:'5'}, {photoURL:'jholt_230914_LivelyHoliday23_1553_HiRes_1.jpg', alt:'fall Art Direction', id:'6'}, {photoURL:'jholt_230914_LivelyHoliday23_1575_HiRes_1.jpg', alt:'fall Art Direction', id:'7'}]

function Fall() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-4 md:col-span-8':'col-span-4 md:col-span-8'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/fall/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible transition-all -mt-4 mr-6 self-end ${enlarge === photo.id?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-2 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Fall '23 Art Direction for Lively</h2>
                <p className='text-sm mb-10'>The Fall 2023 capsule channels the warm and inviting hues of rich olive. The deep, earthy tones of rich olive were elegantly highlighted in a cozy setting, the overall aesthetic creating a harmonious blend of warmth. This fall photoshoot is a testament to my ability to evoke the cozy, nostalgic, and enchanting elements of the season, ensuring that each frame radiates the unique beauty of this time of year, and highlighting my talent for creating visually compelling and emotionally resonant content.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Fall