import React from "react";
import { useState } from 'react';
import Back from "../../layout/BackButton";

const photos = [{photoURL:'00.png', alt:'Trend Analysis', id:'1'}, {photoURL:'01.png', alt:'Trend Analysis', id:'2'}, {photoURL:'02.png', alt:'Trend Analysis', id:'3'}, {photoURL:'03.png', alt:'Trend Analysis', id:'4'}, {photoURL:'04.png', alt:'Trend Analysis', id:'5'}, {photoURL:'05.png', alt:'Trend Analysis', id:'6'}, {photoURL:'06.png', alt:'Trend Analysis', id:'7'}, {photoURL:'07.png', alt:'Trend Analysis', id:'8'}, {photoURL:'08.png', alt:'Trend Analysis', id:'9'}, {photoURL:'09.png', alt:'Trend Analysis', id:'10'}]

function TrendAnalysis() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-4 md:col-span-8':'col-span-4 md:col-span-8'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/trend-analysis/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible transition-all -mt-4 mr-6 self-end ${enlarge === photo.id?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-2 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Trend Analysis for Lively</h2>
                <p className='text-sm mb-10'>Staying updated on design and creative trends is crucial for delivering fresh and relevant work. I consistently incorporate current trends while also showcasing a forward-thinking approach. From initial concepting, to product design & development, through to photoshoots & asset creation I regularly analyze trends and adapt them to suit the needs of each project.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default TrendAnalysis