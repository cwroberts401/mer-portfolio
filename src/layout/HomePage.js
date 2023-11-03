import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useWindowSize } from "./WindowSize";
import useAuth from "../useAuth";

const images = [
    {"id": 1, "src": "img01.JPG", "alt": "mood slide"},
    {"id": 2, "src": "img02.JPG", "alt": "mood slide"},
    {"id": 3, "src": "img03.JPG", "alt": "mood slide"},
    {"id": 4, "src": "img04.JPG", "alt": "mood slide"},
    {"id": 5, "src": "img05.JPG", "alt": "mood slide"},
    {"id": 6, "src": "img06.JPG", "alt": "mood slide"},
    {"id": 7, "src": "img07.JPG", "alt": "mood slide"},
    {"id": 8, "src": "img08.JPG", "alt": "mood slide"},
    {"id": 9, "src": "img09.JPG", "alt": "mood slide"},
    {"id": 10, "src": "img10.JPG", "alt": "mood slide"},
]




export default function HomePage() {

    const size = useWindowSize();

    const [maxImg, setmaxImg] = useState(10);
    const[value, setValue] = useState("");
    const[passFail, setPassFail] = useState(false) 
    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();
    
    

    const handleClick = () => {
        

        if (value === "561") {
            login().then(() => {
                navigate(state?.path || "/portfolio");
            })
            
        } else {
            setPassFail(true)
            setValue("")
        }
    }

    useEffect(() => {

        
        if (size.width < 640) {setmaxImg(8)} else if (size.width < 768) {setmaxImg(9)} else if (size.width < 1024) {setmaxImg(8)};

    }, [size]);

    let imageLayout = images.slice(0, maxImg).map((image) => {
        return (
            <img key={image.id} className='object-cover w-full aspect-[4/5] col-span-2' src={process.env.PUBLIC_URL + `/homepage/${image.src}`} alt={image.alt}/>
        )
    })

    return (
        <>
        <div className='w-screen min-h-screen bg-fuchsia-200'>
        <div className='flex flex-col justify-center items-center pt-10'>
            <h1 className='text-4xl sm:text-5xl text-white'>Meredith Roberts</h1>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} id="entry code" name="entry code" className=" w-[220px] rounded text-center mt-10" placeholder="entry code"/>
            <button onClick={handleClick} className='text-sm text-center w-[170px] border px-3 py-px border-gray-500 hover:border-gray-900 rounded text-gray-500 hover:text-gray-900 mt-2'>enter</button>
            {passFail? <p className='text-red-500'>please enter correct passcode</p>: null}
        </div>

        <div id="grid" className=' bg-fuchsia-200 p-10 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8  lg:grid-col-10 gap-8'>
            {imageLayout}
        </div>
        </div>
        </>
    )
}