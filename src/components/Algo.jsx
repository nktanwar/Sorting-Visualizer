import { React } from 'react'
import { useNavigate } from 'react-router-dom';
import {ButtonN} from './button';
import { useSetRecoilState } from 'recoil';
import { callState,legend,text } from '../assets/atoms';

export default function Algorithms() {
    const setCallState = useSetRecoilState(callState);
    const setName = useSetRecoilState(text);
    const setLegend=useSetRecoilState(legend);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    };
    const handleNavigateB = () => {
        navigate('/'); // Navigate back first
        setName("Bubble Sort");
        setCallState(0); 
        setLegend([true,false,false,false,false]);
        setTimeout(() => {
            setCallState(1); 
            // Trigger bubble sort after navigating
            
        }, 1000);
        
    };
    const handleNavigateMS=()=>{
        navigate('/');
        setName("Merge Sort");
        setCallState(0);
        setLegend([false,true,false,false,false]);
        setTimeout(()=>{
            setCallState(2);
           
        },1000);
    }
    const handleNavigateIS=()=>{
        navigate('/');
        setName("Insertion Sort");
        setLegend([false,false,true,false,false]);
        setCallState(0);
        setTimeout(()=>{
            setCallState(3);
           
        },1000);
    }

    const handleNavigateQC=()=>{
        navigate('/');
        setName("Quick Sort");
        setLegend([false,false,false,true,false]);
        setCallState(0);
        setTimeout(()=>{
            setCallState(4);
           
        },1000);
    }
    const handleNavigateSS=()=>{
        navigate('/');
        setName("Selection Sort");
        setLegend([false,false,false,false,true]);
        setCallState(0);
        setTimeout(()=>{
            setCallState(5);
            
        },1000);
    }


    return (
        <>
            <div className='flex justify-center'>
                <div className='flex justify-center bg-slate-300 w-[58vw]
                h-[12vh] pt-4 rounded-lg mb-12  shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>

                    <ButtonN handleClick={handleNavigate} text={"GO Back"} className="bg-grey-500" height={50} width={120} />

                </div>

            </div>
            <div className='flex justify-center'>
            <div className='flex justify-center bg-slate-300 w-[56vw]
                h-[40vh] pt-4  mb-12 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                    <div className='grid grid-cols-3 p-3'>
                        <ButtonN handleClick={handleNavigateB} text={"Bubble Sort"}/>
                        <ButtonN handleClick={handleNavigateMS} text={"Merge Sort"}/>
                        <ButtonN handleClick={handleNavigateIS} text={"Insertion Sort"}/>
                        <ButtonN   handleClick = {handleNavigateQC} text={"Quick Sort"}/>
                        <ButtonN  handleClick = {handleNavigateSS} text={"Selection Sort"}/>

                    </div>
                </div>

            </div>
          



        </>
    );

};