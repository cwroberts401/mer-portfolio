import React from "react";
import { Instagram, Linkedin, Mail } from 'react-feather';
import { useLocation } from 'react-router-dom';



function Footer() {
    let location = useLocation();
    return (
    <div className={`${location.pathname === '/'? 'bg-fuchsia-200': null} flex flex-col py-12 justify-center w-screen`}>  
        <p className="text-xs text-gray-500 text-center"> © Meredith Roberts 2023 </p>
        <div className='flex gap-2 pt-2 justify-center'>
                    <a class='hover:opacity-80' href='https://www.instagram.com/strawberryy.girlll/' rel="noreferrer" target='_blank'>
                        < Instagram color='gray' size={20} strokeWidth={1.5} />
                    </a>
                    <a class='hover:opacity-80' href='https://www.linkedin.com/in/meredith-roberts-04324b13b' rel="noreferrer" target='_blank'>
                    < Linkedin color='gray' size={20} strokeWidth={1.5} />
                    </a>
                    <a class='hover:opacity-80' href='mailto:meredithlpadgett@gmail.com'>
                    < Mail color='gray' size={20} strokeWidth={1.5} />
                    </a>
        </div>
    </div>
    )
}

export default Footer;