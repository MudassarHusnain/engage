import React, { useState, useEffect } from "react";

interface LinearProgressBarProps {
    progress: number; 
    height?: number;
    progresscolor?: string;
    nonProgressColor?: string;
    title?: string;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
    progress,
    height = 22,
    progresscolor = "blue",
    nonProgressColor = "#f7fafc",
    title,
}) => {
   

    const progressWidth = (progress / 40) * 100; 

    

    return (
        <div className="flex flex-row justify-end items-center gap-4 w-full text[14px]">
            {title && (
                <div className={`flex justify-end text-[14px] w-1/5 ${title==='New'&& ('font-bold')}`}>
                    {title}
                </div>
            )}

            <div className="border-[1px] border-gray-200 rounded-sm w-4/5">
                <svg width="100%" height={height + 5}>
                    <rect
                        x={0}
                        y={0}
                        width="100%"
                        height={height}
                        fill="none"
                        strokeWidth="3"
                        className="rounded"
                        rx={4}
                        ry={4}
                    />
                    <rect
                        x={2}
                        y={2}
                        width="99%"
                        height={height}
                        fill={nonProgressColor}
                        className="rounded"
                        rx={3}
                        ry={3}
                    />

                    <rect
                        x={2}
                        y={2}
                        width={`${progressWidth}%`} 
                        height={height}
                        fill={progresscolor}
                        rx={3}
                        ry={3}
                    />

                    <text
                        x={`${progressWidth+2}%`}
                        y={height / 2 + 8}
                        fontSize="12"
                        className="font-bold"
                    >
                        {progress}
                    </text>

                    {title === 'New' && (
                        <text
                            x='95%' 
                            y={height / 2 + 8}
                            fontSize="12"
                            fill="currentColor"
                            className="text-gray-400"
                        >
                            40
                        </text>
                    )}
                </svg>
            </div>
        </div>
    );
};

export default LinearProgressBar;
