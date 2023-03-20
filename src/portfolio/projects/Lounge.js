import React from "react";
import { useState } from "react";
import Back from "../../layout/BackButton";

const photos = [{photoURL:'lounge-01.jpg', alt:'lounge collection design', id:'1'},{photoURL:'lounge-02.jpg', alt:'lounge collection design', id:'2'},{photoURL:'lounge-03.jpg', alt:'lounge collection design', id:'3'},{photoURL:'lounge-04.jpg', alt:'lounge collection design', id:'4'},{photoURL:'lounge-05.jpg', alt:'lounge collection design', id:'5'},{photoURL:'lounge-06.jpg', alt:'lounge collection design', id:'6'},{photoURL:'lounge-07.jpg', alt:'lounge collection design', id:'7'},{photoURL:'lounge-08.jpg', alt:'lounge collection design', id:'8'},]

function Lounge() {
    const [enlarge, setEnlarge] = useState(null)

    const handleClick = (e) => {
        
        setEnlarge(enlarge === null || enlarge !== e.target.id? e.target.id: null)
    }

    const listImages = photos.map(photo => 
    <div key={photo.id} className={`flex flex-col transition-all ${enlarge === photo.id ?'-mx-10 col-span-8':'col-span-4'}`}>
        <img className='' src={process.env.PUBLIC_URL + '/lounge/' + photo.photoURL} alt={photo.alt}/>
        <button id={photo.id} onClick={handleClick} className={`invisible md:visible -mt-1 mr-6 self-end ${enlarge === photo.id?'rotate-45':'rotate-0'}`}>+</button>
    </div>
    
    );

    return (
        <div className='grid xl:grid-col-12 md:grid-cols-8 grid-cols-4 md:gap-4 md:mx-20 gap-4 mx-4 my-10'>
            <div className='col-span-4 md:col-span-8 text-center'>
                <h2 className='text-2xl'>Loungewear Collection for Lively</h2>
                <p className='text-sm'> this is the longer description that can go below explaing the project </p>
            </div>
            {listImages}
            < Back />
        </div>
    )
}

export default Lounge