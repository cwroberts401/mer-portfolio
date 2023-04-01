import React from "react";
import { useState } from "react";
import Back from "../../layout/BackButton";

const photos = [{photoURL:'swim-01.jpg', alt:'swim collection design', id:'1'},{photoURL:'swim-02.jpg', alt:'swim collection design', id:'2'},{photoURL:'swim-03.jpg', alt:'swim collection design', id:'3'},{photoURL:'swim-04.jpg', alt:'swim collection design', id:'4'},{photoURL:'swim-05.jpg', alt:'swim collection design', id:'5'},{photoURL:'swim-06.jpg', alt:'swim collection design', id:'6'},{photoURL:'swim-07.jpg', alt:'swim collection design', id:'7'},]

function Swim() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-8':'col-span-4'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/swim/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible -mt-1 mr-6 self-end ${enlarge === '0'?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-4 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Swimwear Collection for Lively</h2>
                <p className='text-sm'>Led design of seasonal swimwear and expansion of category penetration. Sourced, designed & concepted seasonal swim development from sketches through to color palettes & final production.</p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Swim