import React from "react";
import { Instagram, Linkedin, Mail } from 'react-feather';

function Footer() {
    return (
    <div className="flex flex-col py-12 justify-center w-screen">  
        <p className="text-xs text-gray-500 text-center"> © Meredith Roberts 2023 </p>
        <div class='flex gap-2 pt-2 justify-center'>
                    <a class='hover:opacity-80' href='https://www.instagram.com/strawberryy.girlll/' rel="noreferrer" target='_blank'>
                        < Instagram color='gray' size={20} stroke-width={1.5} />
                    </a>
                    <a class='hover:opacity-80' href='https://www.linkedin.com/in/meredith-roberts-04324b13b' rel="noreferrer" target='_blank'>
                    < Linkedin color='gray' size={20} stroke-width={1.5} />
                    </a>
                    <a class='hover:opacity-80' href='mailto:meredithlpadgett@gmail.com'>
                    < Mail color='gray' size={20} stroke-width={1.5} />
                    </a>
        </div>
    </div>
    )
}

export default Footer;