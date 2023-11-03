import React from "react";
import { useState } from 'react';
import Back from "../../layout/BackButton";

const photos = [{photoURL:'0_mesh.png', alt:'Summer Art Direction', id:'1'}, {photoURL:'00.png', alt:'Summer Art Direction', id:'2'}, {photoURL:'Look_13_2638-edit.jpg', alt:'Summer Art Direction', id:'3'}, {photoURL:'Look_15_2818.jpg', alt:'Summer Art Direction', id:'4'}, {photoURL:'Look_15_2893.jpg', alt:'Summer Art Direction', id:'5'}, {photoURL:'Look_17_3331_Edit.jpg', alt:'Summer Art Direction', id:'6'}, {photoURL:'Look_17_3496.jpg', alt:'Summer Art Direction', id:'7'}]

function Summer() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-4 md:col-span-8':'col-span-4 md:col-span-8'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/summer/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible transition-all -mt-4 mr-6 self-end ${enlarge === photo.id?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-2 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Summer '23 Art Direction for Lively</h2>
                <p className='text-sm mb-10'>Summer 2023 explores the electrifying fusion of neon mesh and the vibrant spirit of the season. This project was a creative journey into the heart of summer's energy, where bold and fluorescent mesh textiles took center stage. I collaborated closely with a talented team of photographers, models, and stylists to seamlessly integrate these textures into a sun-soaked, outdoor setting. The result is a collection of sophisticated images that radiate the pulsating essence of summer, capturing the playfulness, intensity, and heat of the season.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Summer