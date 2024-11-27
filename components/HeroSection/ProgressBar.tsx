import React from "react";

interface LinearProgressBarProps {
    progress: number; // Progress value out of 40
    size?: number; // Width of the progress bar (container width) in pixels
    height?: number; // Height of the progress bar in pixels
    progresscolor?: string; // Custom color for the progress bar
    nonProgressColor?: string; // Custom color for the non-progress area
    title?: string;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
    progress,
    size = 511, // Default width of the progress bar in pixels (you can change this)
    height = 22, // Height of the progress bar in pixels
    progresscolor = "blue", // Default color is blue
    nonProgressColor = "#f7fafc", // Default to gray-100 hex value
    title,
}) => {
    const progressWidth = (progress / 40) * size; // Calculate progress width based on the progress out of 40

    return (
        <>
            <div className="flex flex-row justify-end gap-4 w-full">
                {title && (
                    <div className="flex justify-end text-[14px] w-[94px] ">
                        {title}
                    </div>
                )}

                <div
                    className="border-[1px] border-gray-200 rounded-sm w-[500px]"
                    style={{ width: size }} // Set the width of the container dynamically
                >
                    <svg width="100%" height={height+5}>
                        <rect
                            x={0}
                            y={0}
                            width="100%"
                            height={height+10}
                            fill="none"
                            stroke="gray"
                            strokeWidth="3"
                            className="rounded"
                        />
                        <rect
                            x={0}
                            y={0}
                            width="100%"
                            height={height+3}
                            fill={nonProgressColor}
                            className="rounded"
                        />

                        <rect
                            x={2}
                            y={2}
                            width={progressWidth}
                            height={height}
                            fill={progresscolor}
                            rx={3}  
                            ry={3}  
                            className=""
                        />


                        <text
                            x={progressWidth + 5}
                            y={height / 2 + 5}
                            fontSize="12"
                            className="font-bold"
                        >
                            {progress}
                        </text>
                        {title==='New'?
                         (<text
                         x={size - 23}
                         y={height / 2 + 5}
                         fontSize="12"
                         fill="currentColor"
                         className="text-gray-400"
                     >
                         40
                     </text>):
                     ''  
                    }
                        
                    </svg>
                </div>
            </div>
        </>
    );
};

export default LinearProgressBar;
