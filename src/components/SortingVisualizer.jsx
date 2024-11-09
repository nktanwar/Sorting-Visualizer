import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { ButtonN } from './button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { callState, initialSz, legend } from '../assets/atoms';


const SortVisualizer = ({ height,  initialTime }) => {
    const [call, setCall] = useRecoilState(callState);
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [time, setTime] = useState(initialTime);
    const [selectedI, setSelectedI] = useState([]);
    const [pivotI, SetpivotI] = useState([]);
    const [swapedI, setSwapedI] = useState([]);
    const [insertionSorted, setIS] = useState([]);
    const [quickHalf, setQuickHalf] = useState([]);
    const [mergedI, setMergedI] = useState([]);
    const initialSize= useRecoilValue(initialSz);
    const isLegend = useRecoilValue(legend);
    const [containerWidth, setContainerWidth] = useState(600);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (window.innerWidth >= 1024) {     
        setContainerWidth(590);
      } else if (window.innerWidth >= 768) { 
        setContainerWidth(450);
      } else {                               
        setContainerWidth(350);
      }
    };

    // Set initial width
    updateContainerWidth();

    // Listen for resize events
    window.addEventListener('resize', updateContainerWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);
    

    useEffect(() => {
        setTime(initialTime);
    }, [initialTime]);

    useEffect(() => {
        generateArray();
    }, [initialSize]);

    const generateArray = useCallback(() => {
        const newArray = Array.from({ length: initialSize }, () => Math.floor(Math.random() * 150));
        setArray(newArray);
    }, [initialSize]);

    useEffect(() => {
        if (call === 1) {
            bubbleSort();
        } else if (call == 2) {
            const newArrayM = [...array];
            mergeSort(newArrayM);
        } else if (call == 3) {
            insertionSort();
        } else if (call === 4) {
            const newArrayQ = [...array];
            quickSort(newArrayQ);
        } else if (call == 5) {
            selectionSort();
        }
    }, [call]);

    const bubbleSort = async () => {
        if (isSorting) return; // Prevent multiple sorting triggers

        setIsSorting(true);
        const newArray = [...array];

        for (let i = 0; i < newArray.length - 1; i++) {
            for (let j = 0; j < newArray.length - i - 1; j++) {
                setSelectedI([j, j + 1]);
                await new Promise(resolve => setTimeout(resolve, time));

                if (newArray[j] > newArray[j + 1]) {
                    await swap(j, j + 1, newArray);
                }
                setSelectedI([]);
                await new Promise(resolve => setTimeout(resolve, time));
            }
        }

        setArray(newArray);
        setIsSorting(false);
        setCall(0);
    };

    async function quickSort(arr, low = 0, high = arr.length - 1) {
        if (isSorting) return;
        setIsSorting(true);
        if (low < high) {
            setQuickHalf([low, high]);
            await new Promise(resolve => setTimeout(resolve, 2 * time)); // Add delay for visualization
            const pivotIndex = await partition(arr, low, high);
            await quickSort(arr, low, pivotIndex - 1);
            await quickSort(arr, pivotIndex + 1, high);
        }
        setArray([...arr]);
        setQuickHalf([]);
        setIsSorting(false);
    }

    async function partition(arr, low, high) {
        const pivot = arr[high]; // 
        let i = low - 1; // Index of smaller element

        SetpivotI([high]);
        await new Promise(resolve => setTimeout(resolve, 2 * time));
        for (let j = low; j < high; j++) {
            setSelectedI([j]);
            await new Promise(resolve => setTimeout(resolve, time));
            if (arr[j] < pivot) {
                i++;
                await swap(i, j, arr);
            }
        }
        await swap(i + 1, high, arr);
        setSelectedI([]);
        SetpivotI([]);
        setQuickHalf([]);
        await new Promise(resolve => setTimeout(resolve, time));

        return i + 1;
    }

    const selectionSort = async () => {
        if (isSorting) return; // Prevent multiple sorting triggers

        setIsSorting(true);
        const newArray = [...array];

        for (let i = 0; i < newArray.length - 1; i++) {
            let minIndex = i;
            setSelectedI([i]); // Highlight the starting point of each iteration
            await new Promise(resolve => setTimeout(resolve, time));

            for (let j = i + 1; j < newArray.length; j++) {
                setSelectedI([minIndex, j]); // Highlight the current comparison
                await new Promise(resolve => setTimeout(resolve, time));

                if (newArray[j] < newArray[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex !== i) {
                await swap(i, minIndex, newArray); // Swap the found minimum with the first unsorted element
            }

            setSelectedI([]); // Clear highlights
            await new Promise(resolve => setTimeout(resolve, time));
        }

        setArray(newArray); // Update the array after sorting is done
        setIsSorting(false);
        setCall(0); // Reset the call state
    };

    const insertionSort = async () => {
        if (isSorting) return; // Prevent multiple sorting triggers

        setIsSorting(true);
        const newArray = [...array];

        for (let i = 1; i < newArray.length; i++) {
            let key = newArray[i];
            let j = i - 1;

            setIS([i]);
            setSelectedI([i]); // Highlight the key being inserted
            await new Promise(resolve => setTimeout(resolve, time));

            while (j >= 0 && newArray[j] > key) {
                setSelectedI([j, j + 1]); // Highlight the comparison
                await new Promise(resolve => setTimeout(resolve, time));

                await swap(j + 1, j, newArray);
                // setArray([...newArray]);
                await new Promise(resolve => setTimeout(resolve, time));
                j--;
            }

            newArray[j + 1] = key; // Insert the key at the correct position
            setArray([...newArray]);

            setSelectedI([]); // Clear highlights after insertion
            await new Promise(resolve => setTimeout(resolve, time));
        }

        setIsSorting(false);
        setIS([]);
        setCall(0); // Reset the call state
    };

    async function mergeSort(arr, left = 0, right = arr.length - 1) {
        if (left >= right || isSorting) return;
        setIsSorting(true);

        const middle = Math.floor((left + right) / 2);

        await mergeSort(arr, left, middle);
        await mergeSort(arr, middle + 1, right);

        await merge(arr, left, middle, right);

        setArray([...arr]); // Update the array after each merge
        setIsSorting(false);
        setCall(0); // Reset the call state after sorting
    };

    const merge = async (arr, left, middle, right) => {
        const leftArr = arr.slice(left, middle + 1);
        const rightArr = arr.slice(middle + 1, right + 1);

        let i = 0, j = 0, k = left;
        const newMergedI = [];

        while (i < leftArr.length && j < rightArr.length) {
            setSelectedI([k]); // Highlight the current element
            await new Promise(resolve => setTimeout(resolve, time));

            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                newMergedI.push(k);
                i++;
            } else {
                arr[k] = rightArr[j];
                newMergedI.push(k);
                j++;
            }
            setMergedI([...newMergedI]);
            k++;
        }

        while (i < leftArr.length) {
            setSelectedI([k]);
            await new Promise(resolve => setTimeout(resolve, time));
            arr[k] = leftArr[i];
            newMergedI.push(k); // Track the merged index
            setMergedI([...newMergedI]);
            i++;
            k++;
        }

        while (j < rightArr.length) {
            setSelectedI([k]);
            await new Promise(resolve => setTimeout(resolve, time));
            arr[k] = rightArr[j];
            newMergedI.push(k); // Track the merged index
            setMergedI([...newMergedI]);
            j++;
            k++;
        }

        setSelectedI([]); // Clear the highlighted elements after merge
        setMergedI([]);
    };

    const swap = async (index1, index2, newArray) => {
        if (index1 < 0 || index1 >= newArray.length || index2 < 0 || index2 >= newArray.length) {
            console.error('Invalid indices for swap');
            return;
        }

        setSwapedI([index1, index2]);
        await new Promise(resolve => setTimeout(resolve, 2 * time));

        const temp = newArray[index1];
        newArray[index1] = newArray[index2];
        newArray[index2] = temp;

        setArray([...newArray]);
        setSwapedI([]);
        await new Promise(resolve => setTimeout(resolve, 1.5 * time));
    };

    // const containerWidth = 600; // Adjust according to your layout
    const barWidth = Math.max(containerWidth / initialSize, 1); // Minimum width for visibility

    return (
        <div className="flex flex-col md:flex">
            <div className=" md:flex flex-col items-center">
                <div 
                    className="bg-blue-100 flex justify-center min-h-[500px] w-auto text-white font-bold rounded-md p-2 relative mb-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <div className="flex justify-start items-end w-full ">
                        {array.map((value, index) => {
                            const isSelected = selectedI.includes(index);
                            const isSwaped = swapedI.includes(index);
                            const isPivot = pivotI.includes(index);
                            const isISorted = insertionSorted.includes(index);
                            const isQuickHalf = quickHalf.includes(index);
                            const isMerged = mergedI.includes(index);
                            const barHeight = Math.min(value * 4, height - 40);
                            const barClass = classNames(
                                'border  border-violet-900 transition-height duration-500', {
                                'bg-yellow-500 ': isSwaped || isMerged,
                                'bg-blue-500': isSelected && !isSwaped,
                                'bg-fuchsia-500': !isSelected && !isSwaped,
                                'bg-red-500': isPivot,
                                'bg-green-500': isISorted || isQuickHalf
                            });

                            return (
                                
                                <div
                                    key={index}
                                    style={{ height: `${barHeight}px`, width: `${barWidth}px`, margin: '0' }} // Margin to separate bars
                                    className={barClass}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col mb-7 md: md:flex p-3 justify-center bg-blue-500 shadow-lg transform transition-all md:duration-300 md:hover:scale-105 md:hover:shadow-2xl rounded-2xl">
                    <ButtonN handleClick={generateArray}
                        disabled={isSorting} text={'Reset Graph'} />
                </div>
            </div>
           
           
        </div>
    );
};

export default SortVisualizer;
