import React from "react";
import { useNavigate } from "react-router-dom";


export default function Back() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <button className='invisible md:visible text-xs border px-3 py-px border-gray-500 hover:border-gray-900 rounded fixed bottom-3 left-3 text-gray-500 hover:text-gray-900' onClick={handleBack}> {`< back`} </button>
    )
}