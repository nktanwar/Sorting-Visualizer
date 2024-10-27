import React from 'react';
import SortVisualizer from './SortingVisualizer';
import { Button } from './button';
import { Box, BoxM } from './box';
import { useRecoilValue } from 'recoil';
import { downS, downC, downSS, downTC, inputTime, legend } from '../assets/atoms';
import { LegendB, LegendQS, LegendSS, LegendMS, LegendIS } from './legend';





import {
    BubbleSortDescription,
    BubbleSS,
    TCBubbleSort,
    SCBubbleSort,
    MergeSortDescription,
    SCMergeSort,
    TCMergeSort,
    TCInsertionSort,
    SCInsertionSort,
    InsertionSortDescription,
    TCSelectionSort,
    SCSelectionSort,
    QuickSortDescription,
    TCQuickSort,
    SCQuickSort,
    SelectionSortDescription,
} from './Description'; // Import all relevant components


const Home = () => {
    const isDownS = useRecoilValue(downS);
    const isDownSS = useRecoilValue(downSS);
    const isDownC = useRecoilValue(downC);
    const isDownTC = useRecoilValue(downTC);
    const time = useRecoilValue(inputTime);
    const isLegend = useRecoilValue(legend); // Use the legend state



    return (
        <>
            <div className="grid grid-cols-1 md:flex md:relative md:p-3  md:mb-10">
                <div className=' md:relative md:w-1/3 md:pr-2 '>

                    {isLegend[0] && !isLegend[1] && !isLegend[2] && !isLegend[3] && !isLegend[4] && <LegendB /> }
                    {!isLegend[0] && isLegend[1] && !isLegend[2] && !isLegend[3] && !isLegend[4] && <LegendMS />}
                    {!isLegend[0] && !isLegend[1] && isLegend[2] && !isLegend[3] && !isLegend[4] && <LegendIS />}
                    {!isLegend[0] && !isLegend[1] && !isLegend[2] && isLegend[3] && !isLegend[4] && <LegendQS />}
                    {!isLegend[0] && !isLegend[1] && !isLegend[2] && !isLegend[3] && isLegend[4] && <LegendSS />}
                    {/* Move Legend here to place it beside the SortVisualizer */}



                </div>

                <div className='md:w-1/3 '>
                    <Box width="100%" height={50} />

                </div>


            </div>




            <div className=" flex flex-col md:flex-row md:justify-evenly md:ml-10">

                <div className="w-full md:w-1/2" >
                    <SortVisualizer initialTime={time} height={500} />
                </div>

                <div className='flex flex-col w-full md:w-1/2 h-auto'>
                    <div className='flex flex-col justify-items-center'>
                        <BoxM width={600} height={300} Button={Button} />



                        <div className='flex'>
                            {/* Bubble Sort Components */}
                            {isLegend[0] && isDownS && !isDownC && !isDownTC && !isDownSS && <BubbleSortDescription />}
                            {!isDownS && !isDownC && !isDownTC && isDownSS && <BubbleSS />}
                            {isLegend[0] && !isDownS && !isDownC && isDownTC && !isDownSS && <TCBubbleSort />}
                            {isLegend[0] && isDownC && !isDownTC && !isDownSS && <SCBubbleSort />}

                            {/* Merge Sort Components */}
                            {isLegend[1] && isDownS && !isDownC && !isDownTC && !isDownSS && <MergeSortDescription />}
                            {isLegend[1] && isDownC && !isDownTC && !isDownSS && <SCMergeSort />}
                            {isLegend[1] && !isDownS && !isDownC && isDownTC && !isDownSS && <TCMergeSort />}
                            {/* Add more Merge Sort components as needed */}

                            {/* Insertion Sort Components */}
                            {isLegend[2] && isDownS && !isDownC && !isDownTC && !isDownSS && <InsertionSortDescription />}
                            {isLegend[2] && isDownC && !isDownTC && !isDownSS && <SCInsertionSort />}
                            {isLegend[2] && !isDownS && !isDownC && isDownTC && !isDownSS && <TCInsertionSort />}

                            {/* Selection Sort Components */}
                            {isLegend[4] && isDownS && !isDownC && !isDownTC && !isDownSS && <SelectionSortDescription />}
                            {isLegend[4] && isDownC && !isDownTC && !isDownSS && <SCSelectionSort />}
                            {isLegend[4] && !isDownS && !isDownC && isDownTC && !isDownSS && <TCSelectionSort />}

                            {/* Quick Sort Components */}
                            {isLegend[3] && isDownS && !isDownC && !isDownTC && !isDownSS && <QuickSortDescription />}
                            {isLegend[3] && isDownC && !isDownTC && !isDownSS && <SCQuickSort />}
                            {isLegend[3] && !isDownS && !isDownC && isDownTC && !isDownSS && <TCQuickSort />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
