import {React} from 'react';
import {ButtonN} from "./button";
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { downC, downS, downSS, downTC,text } from '../assets/atoms';


export  function Box(){
    const navigate = useNavigate(); 
    const handleNavigate = () => {
        navigate('/algo'); 
    };
    const SelectedSorting = useRecoilValue(text);
    
    const boxclass=classNames(
        
        "flex bg-violet-500 justify-center text-white text-3xl p-3 font-extrabold rounded-xl shadow-lg transform transition-all duration-300  hover:shadow-2xl mb-4 md:mb-0"
    );
    const boxclass1=classNames(
        
        "flex bg-violet-500 justify-center text-white text-2xl md:text-3xl p-3 font-extrabold rounded-    "
    );
    

    return(
        <div className={boxclass}>
            
            <div className={boxclass1}>Sorting with</div>
            <div className='mt-1 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl'>
            <ButtonN    handleClick={handleNavigate} text = {SelectedSorting }/>

            </div>
           
            

          
           
            

        </div>
    )

}







export const BoxM = ({ Button }) => {
    const setS=useSetRecoilState(downS);
    const setSS=useSetRecoilState(downSS);
    const setTC = useSetRecoilState(downTC);
    const setSC = useSetRecoilState(downC)
    
    const handleSS=()=>{
        setSS(prevState=>!prevState);
        setS(false);
        setTC(false);
        setSC(false);
    }
    const handleS=()=>{
        setS(prevState => !prevState);
        setSS(false);
        setTC(false);
        setSC(false);
    }
    const handleTC=()=>{
        setTC(prevState => !prevState);
        setS(false);
        setSS(false);
        setSC(false);
    }
    const handleSC=()=>{
        setSC(prevState => !prevState);
        setS(false);
        setSS(false);
        setTC(false);

    }
    return (

        <div
           
            className="bg-blue-100 grid grid-cols-1 gap-4 w-auto justify-items-center items-center text-white font-bold rounded-md p-8 shadow-lg transform transition-all  duration-300 hover:scale-105 hover:shadow-2xl"
        >
            {Button && <Button handleC={handleS}  text={'Description'}  />}

            {Button && <Button handleC={handleSS}  text={'Sorting Setting'} />}

            <div className='p-1 gap-2 flex justify-items-center items-center  '>
                
            {Button && <Button handleC={handleTC}  text={'Time complexity'}  />}

            {Button && <Button handleC={handleSC}  text={' Space complexity'} />}
            </div>




        </div>



    );
};

 



export const BoxS = () => {
    return (
        <div
            className="bg-blue-100 grid grid-cols-1 gap-4 justify-items-center items-end text-white font-bold rounded-md p-2 relative"
        >
            
        </div>
    );
};

