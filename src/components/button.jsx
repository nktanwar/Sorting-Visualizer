import {React,useState} from 'react';
import { ArrowUp, ArrowDown } from './Arrow'; 

 



export const Button = ({ width, height, text, handleC }) => {
    const [isArrowDown, setIsArrowDown] = useState(false);

    const handleClick = () => {
        setIsArrowDown(prevState => !prevState);
        handleC();
    };

    return (
        <button
            onClick={handleClick}
            className={`
                md:flex items-center justify-center 
                bg-blue-500 text-xl text-aliceblue font-bold 
                hover:bg-gradient-to-r from-purple-700 to-purple-400 
                shadow-lg transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl 
                rounded-2xl`}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <span className="mr-2 text-white font-bold">{text}</span>
            {isArrowDown ? <ArrowDown /> : <ArrowUp />}
        </button>
    );
};

export const ButtonN = ({ width, height, text, disabled,handleClick }) => {
   
    return (
       
            <button
                onClick={handleClick} disabled={disabled}
                className={`flex items-center justify-center 
                     bg-grey-300 rounded-md text-xl text-aliceblue font-normal transition 
                    duration-300 
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-r from-purple-700 to-purple-400 '}
                     w-full md:w-${width} h-${height}`}
                
            >
                <span className="font-extrabold flex flex-col justify-items-center md:mr-2 p-2 text-white text-xl md:font-bold">{text}</span>
            </button>
       
    );
};


