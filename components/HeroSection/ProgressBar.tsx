import React from "react";

interface LinearProgressBarProps {
    progress: number; // Progress value out of 40
    size?: number; // Width of the progress bar
    height?: number; // Height of the progress bar
    progresscolor?: string; // Custom color for the progress bar
    nonProgressColor?: string; // Custom color for the non-progress area
    title?: string;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
    progress,
    size = 515, // Total width of the progress bar
    height = 16, // Height of the progress bar
    progresscolor = "blue", // Default color is blue
    nonProgressColor = "#f7fafc", // Default to gray-100 hex value
    title,
}) => {
    const progressWidth = (progress / 40) * size;

    return (
        <>
            <div className="flex flex-row justify-between gap-4 items-center w-full">
                <div className=" justify-end">
                    {title}
                </div>
                
                <div className="border-[2px] border-gray-200 rounded-md ">
                    <svg width={size} height={height}>
                        <rect
                            x={0}
                            y={0}
                            width={size}
                            height={height}
                            fill="none" 
                            stroke="gray"
                            strokeWidth="3"
                            className="rounded"
                        />
                        <rect
                            x={0}
                            y={0}
                            width={size}
                            height={height}
                            fill={nonProgressColor}
                            className="rounded"

                        />
                        
                        <rect
                            x={0}
                            y={0}
                            width={progressWidth} 
                            height={height}
                            fill={progresscolor} 
                            className="rounded"
                        />
                        
                        <text
                            x={progressWidth + 5} 
                            y={height / 2 + 5} 
                            fontSize="12"
                            className="font-bold"

                        >
                            {progress}
                        </text>
                        <text
                            x={size - 18} 
                            y={height / 2 + 5} 
                            fontSize="12"
                            fill="currentColor"
                            className="text-gray-400"
                        >
                            40
                        </text>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default LinearProgressBar;
