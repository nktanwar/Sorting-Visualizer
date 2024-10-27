import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { inputTime,initialSz} from '../assets/atoms';


export function BubbleSortDescription() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 rounded-lg text-blue-900 font-semibold p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Bubble Sort Description:</h2>
            <p>
                Bubble Sort loops through the array to compare each number with the number before it. The bigger values move to the right, so smaller values are shifted left as large values are moved to the right.
            </p>
            <h3 className="font-semibold mt-4">Bubble Sort Example:</h3>
            <p>
                You are trying to pick up litter along a road. As you run down the road, you pick up a small piece of litter. You continue on the path until you find a larger piece of litter, at which point you drop the small litter for the larger one. After putting the large litter in the trash at the end of the road, you decide to run down the road again doing the same thing.
            </p>
        </div>
    );
};

// BubbleSS Component (New, with Sliders)
export function BubbleSS() {
    const [timeValue, setTimeValue] = useRecoilState(inputTime); // Recoil state for "time"
    const [sizeValue, setSizeValue] = useRecoilState(initialSz); // Local state for "size"

    // Handlers for slider changes
    const handleTimeChange = (e) => {
        const value = Number(e.target.value);
        setTimeValue(value); // Update the recoil state for time
    };

    const handleSizeChange = (e) => {
        const value = Number(e.target.value);
        setSizeValue(value); // Update the local state for size
    };

    return (
        <div className='bg-blue-100 w-[600px] h-[30vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            {/* Slider for Size */}
            <div className="mt-4">
                <label htmlFor="size-slider" className="block mb-2">Size: {sizeValue}</label>
                <input
                    type="range"
                    id="size-slider"
                    min="10"
                    max="150"
                    value={sizeValue}
                    onChange={handleSizeChange}
                    className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    style={{
                        WebkitAppearance: 'none', // Hide default styling for Webkit browsers
                    }}
                />
            </div>

            {/* Slider for Time */}
            <div className="mt-4">
                <label htmlFor="time-slider" className="block mb-2">Time: {timeValue} ms</label>
                <input
                    type="range"
                    id="time-slider"
                    min="100"
                    max="2000"
                    value={timeValue}
                    onChange={handleTimeChange}
                    className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    style={{
                        WebkitAppearance: 'none', // Hide default styling for Webkit browsers
                    }}
                />
            </div>
        </div>
    );
};


export function TCBubbleSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Time Complexity of Bubble Sort</h2>
            <p className="mb-4">
                The time complexity of Bubble Sort is primarily O(n²) in the average and worst cases. This is because, for each element, the algorithm compares it to every other element in the array.
            </p>
            <h3 className="font-semibold mb-2">Best Case:</h3>
            <p className="mb-2">
                O(n) - This occurs when the array is already sorted. The algorithm will only make a single pass through the array.
            </p>
            <h3 className="font-semibold mb-2">Average and Worst Case:</h3>
            <p>
                O(n²) - This happens when the array is in reverse order or in a random order, requiring multiple passes to sort the elements.
            </p>
        </div>
    );
}

export function SCBubbleSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Space Complexity of Bubble Sort</h2>
            <p className="mb-4">
                The space complexity of Bubble Sort is O(1) because it requires a constant amount of additional space.
            </p>
            <h3 className="font-semibold mb-2">Explanation:</h3>
            <p className="mb-2">
                Bubble Sort operates in place, meaning that it does not need any additional data structures to hold the elements while sorting.
            </p>
            <h3 className="font-semibold mb-2">Memory Usage:</h3>
            <p>
                The only additional space required is for a few variables used for swapping and iterating through the array.
            </p>
        </div>
    );
}




export function MergeSortDescription() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 rounded-lg text-blue-900 font-semibold p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Merge Sort Description:</h2>
            <p>
                Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, sorts them recursively, and then merges the sorted halves. It is efficient for large datasets and guarantees O(n log n) time complexity.
            </p>
            <h3 className="font-semibold mt-4">Merge Sort Example:</h3>
            <p>
                Imagine splitting a pile of unsorted papers into two smaller piles. You sort each pile individually and then combine them back together in order. This way, the entire collection is sorted efficiently.
            </p>
        </div>
    );
}


export function TCMergeSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Time Complexity of Merge Sort</h2>
            <p className="mb-4">
                The time complexity of Merge Sort is O(n log n) in all cases (best, average, and worst). This is due to the algorithm dividing the array into halves and sorting them, leading to a logarithmic number of splits, with linear work required to merge them back together.
            </p>
            <h3 className="font-semibold mb-2">Best, Average, and Worst Case:</h3>
            <p>
                O(n log n) - This is consistent across all scenarios since the algorithm always splits the array into halves.
            </p>
        </div>
    );
}

export function SCMergeSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Space Complexity of Merge Sort</h2>
            <p className="mb-4">
                The space complexity of Merge Sort is O(n) because it requires additional space for the temporary arrays used for merging.
            </p>
            <h3 className="font-semibold mb-2">Explanation:</h3>
            <p className="mb-2">
                Merge Sort creates copies of the halves of the array being merged, which requires additional space proportional to the size of the array being sorted.
            </p>
            <h3 className="font-semibold mb-2">Memory Usage:</h3>
            <p>
                The extra space is needed to hold the elements of the subarrays while merging them, resulting in a linear increase in memory usage relative to the size of the input.
            </p>
        </div>
    );
}




export function InsertionSortDescription() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 rounded-lg text-blue-900 font-semibold p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Insertion Sort Description:</h2>
            <p>
                Insertion Sort is a simple sorting algorithm that builds a sorted array one element at a time. It iterates through the input array, and for each element, it compares it to the elements in the sorted section and inserts it into the correct position.
            </p>
            <h3 className="font-semibold mt-4">Insertion Sort Example:</h3>
            <p>
                Imagine sorting a hand of playing cards. You take one card from the unsorted pile and insert it into its correct position in the sorted pile, repeating this process until all cards are sorted.
            </p>
        </div>
    );
}


export function TCInsertionSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Time Complexity of Insertion Sort</h2>
            <p className="mb-4">
                The time complexity of Insertion Sort is O(n²) in the average and worst cases. This occurs because each element is compared to the already sorted elements, requiring potentially n comparisons for n elements.
            </p>
            <h3 className="font-semibold mb-2">Best Case:</h3>
            <p className="mb-2">
                O(n) - This happens when the array is already sorted, as each element only needs to be compared once.
            </p>
            <h3 className="font-semibold mb-2">Average and Worst Case:</h3>
            <p>
                O(n²) - This occurs when the elements are in reverse order or random order, requiring a maximum number of comparisons.
            </p>
        </div>
    );
}

export function SCInsertionSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Space Complexity of Insertion Sort</h2>
            <p className="mb-4">
                The space complexity of Insertion Sort is O(1) because it only requires a constant amount of additional space for a few variables used during the sorting process.
            </p>
            <h3 className="font-semibold mb-2">Explanation:</h3>
            <p className="mb-2">
                Insertion Sort operates in place, meaning it does not require additional data structures to hold the elements while sorting.
            </p>
            <h3 className="font-semibold mb-2">Memory Usage:</h3>
            <p>
                The only additional space required is for a few temporary variables to hold values during swaps and comparisons.
            </p>
        </div>
    );
}



export function QuickSortDescription() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 rounded-lg text-blue-900 font-semibold p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Quick Sort Description:</h2>
            <p>
                Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach. It selects a 'pivot' element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
            </p>
            <h3 className="font-semibold mt-4">Quick Sort Example:</h3>
            <p>
                Imagine choosing a card from a deck (the pivot) and arranging the other cards into two piles: those lower than the chosen card and those higher. You repeat the process for each pile until all cards are sorted.
            </p>
        </div>
    );
}

export function TCQuickSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Time Complexity of Quick Sort</h2>
            <p className="mb-4">
                The average time complexity of Quick Sort is O(n log n). However, in the worst case (when the smallest or largest element is always chosen as the pivot), the time complexity can degrade to O(n²).
            </p>
            <h3 className="font-semibold mb-2">Best Case:</h3>
            <p className="mb-2">
                O(n log n) - This occurs when the pivot divides the array into two nearly equal halves.
            </p>
            <h3 className="font-semibold mb-2">Average Case:</h3>
            <p className="mb-2">
                O(n log n) - On average, Quick Sort performs well due to its divide-and-conquer strategy.
            </p>
            <h3 className="font-semibold mb-2">Worst Case:</h3>
            <p>
                O(n²) - This happens when the pivot chosen is consistently the smallest or largest element.
            </p>
        </div>
    );
}

export function SCQuickSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Space Complexity of Quick Sort</h2>
            <p className="mb-4">
                The space complexity of Quick Sort is O(log n) due to the recursion stack for the recursive calls. In the worst case, it can go up to O(n).
            </p>
            <h3 className="font-semibold mb-2">Explanation:</h3>
            <p className="mb-2">
                Quick Sort requires additional space for the call stack during the recursive sorting process.
            </p>
            <h3 className="font-semibold mb-2">Memory Usage:</h3>
            <p>
                In practice, the space requirement is quite low compared to other sorting algorithms, especially for large datasets.
            </p>
        </div>
    );
}




export function SelectionSortDescription() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 rounded-lg text-blue-900 font-semibold p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Selection Sort Description:</h2>
            <p>
                Selection Sort is a simple comparison-based sorting algorithm. It divides the input array into a sorted and an unsorted region. The algorithm repeatedly selects the smallest (or largest, depending on the order) element from the unsorted region and swaps it with the first unsorted element, effectively growing the sorted region.
            </p>
            <h3 className="font-semibold mt-4">Selection Sort Example:</h3>
            <p>
                Imagine sorting a list of numbers. You start by finding the smallest number in the list and swapping it with the first number. Then, you find the next smallest number in the remaining unsorted numbers and swap it with the second number. You repeat this process until the entire list is sorted.
            </p>
        </div>
    );
}

export function TCSelectionSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Time Complexity of Selection Sort</h2>
            <p className="mb-4">
                The time complexity of Selection Sort is O(n²) in all cases (best, average, and worst). This is because it requires two nested loops to go through the array: one to select an element and the other to find the minimum element in the unsorted part.
            </p>
            <h3 className="font-semibold mb-2">Best, Average, and Worst Case:</h3>
            <p>
                O(n²) - This occurs because the algorithm always requires scanning the remaining unsorted elements to find the minimum.
            </p>
        </div>
    );
}

export function SCSelectionSort() {
    return (
        <div className='bg-blue-100 w-[600px] h-[40vh] mt-10 text-blue-900 font-semibold p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <h2 className="font-bold mb-2">Space Complexity of Selection Sort</h2>
            <p className="mb-4">
                The space complexity of Selection Sort is O(1) because it requires a constant amount of additional space for a few variables used during the sorting process.
            </p>
            <h3 className="font-semibold mb-2">Explanation:</h3>
            <p className="mb-2">
                Selection Sort operates in place, meaning it does not require additional data structures to hold the elements while sorting.
            </p>
            <h3 className="font-semibold mb-2">Memory Usage:</h3>
            <p>
                The only additional space required is for a few temporary variables to hold values during swaps and comparisons.
            </p>
        </div>
    );
}


