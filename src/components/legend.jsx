import React from "react";

export function LegendB(){
    return(
        <>
          {/* Color Legend */}
          <div className="flex flex-col items-start ml-6">
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                        <span>Current Index</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                        <span>Swapping Elements</span>
                    </div>
                </div>
        </>
    )
}

export function LegendIS(){
    return(
        <>
          {/* Color Legend */}
          <div className="flex flex-col items-start ml-6">
                    <div className="flex items-center mb-2">
                        <div className="w-3 h-4 bg-blue-500 rounded-full mr-2"></div>
                        <span>Current Index</span>
                    </div>
                   
                    <div className="flex items-center mb-2">
                        <div className="w-3 h-4 bg-fuchsia-500 rounded-full mr-2"></div>
                        <span>Unsorted Elements</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-3 h-4 bg-green-500 rounded-full mr-2"></div>
                        <span>Sorted Upto</span>
                    </div>
                    
                </div>
        </>
    )
}


export function LegendQS(){
    return(
        <>
          {/* Color Legend */}
          <div className="flex flex-col items-start ml-6">
                    <div className="flex items-center mb-2">
                        <div className="w-3 h-4 bg-blue-500 rounded-full mr-2"></div>
                        <span>Current Index</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-3 h-4 bg-yellow-500 rounded-full mr-2"></div>
                        <span>Swapping Elements</span>
                    </div>
                 
                    <div className="flex items-center mb-2">
                        <div className="w-3 h-4 bg-green-500 rounded-full mr-2"></div>
                        <span>Left-Right Index</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-3 h-4 bg-red-500 rounded-full mr-2"></div>
                        <span>Pivot ELement</span>
                    </div>
                    
                </div>
        </>
    )
}


export function LegendMS(){
    return(
        <>
          {/* Color Legend */}
          <div className="flex flex-col items-start ml-6">
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                        <span>Current Index</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                        <span>Merged Array</span>
                    </div>
                </div>
        </>
    )
}


export function LegendSS(){
    return(
        <>
          {/* Color Legend */}
          <div className="flex flex-col items-start ml-6">
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                        <span>Current Index</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                        <span>Swapped Element</span>
                    </div>
                </div>
        </>
    )
}
