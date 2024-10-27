import {React} from 'react';
import {ButtonN} from "./button";
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { downC, downS, downSS, downTC,text } from '../assets/atoms';


export  function Box({width,height,}){
    const navigate = useNavigate(); 
    const handleNavigate = () => {
        navigate('/algo'); 
    };
    const SelectedSorting = useRecoilValue(text);
    
    const boxclass=classNames(
        
        "flex bg-violet-500 justify-center text-white text-3xl p-3 font-extrabold rounded-xl shadow-lg transform transition-all duration-300  hover:shadow-2xl"
    );
    const boxclass1=classNames(
        
        "flex bg-violet-500 justify-center text-white text-3xl p-3 font-extrabold rounded-md   "
    );
    

    return(
        <div className={boxclass}>
            
            <div className={boxclass1}>Sorting with</div>
            <div className='mt-1 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl'>
            <ButtonN  width={width-100} height={height}  handleClick={handleNavigate} text = {SelectedSorting }/>

            </div>
           
            

          
           
            

        </div>
    )

}







export const BoxM = ({ height, width,  Button }) => {
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
            style={{ height: `${height}px`, width: `${width}px` }}
            className="bg-blue-100 grid grid-cols-1 gap-4 justify-items-center items-center text-white font-bold rounded-md p-10 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
            {Button && <Button handleC={handleS} width={200} height={60} text={'Description'}  />}

            {Button && <Button handleC={handleSS} width={250} height={60} text={'Sorting Setting'} />}

            <div className='p-1 gap-2 flex justify-items-center items-center  '>
                
            {Button && <Button handleC={handleTC} width={250} height={60} text={'Time complexity'}  />}

            {Button && <Button handleC={handleSC} width={250} height={60} text={' Space complexity'} />}
            </div>




        </div>



    );
};

 



export const BoxS = ({ height, width, Graph }) => {
    return (
        <div
            style={{ height: `${height}px`, width: `${width}px` }}
            className="bg-blue-100 grid grid-cols-1 gap-4 justify-items-center items-end text-white font-bold rounded-md p-2 relative"
        >
            
        </div>
    );
};

