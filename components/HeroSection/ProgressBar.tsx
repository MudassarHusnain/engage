import React from "react";

interface LinearProgressBarProps {
    progress: number;
    size?: number;
    height?: number;
    progresscolor?: string;
    nonProgressColor?: string;
    title?: string;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
    progress,
    size = 350,
    height = 22,
    progresscolor = "blue",
    nonProgressColor = "#f7fafc",
    title,
}) => {
    const progressWidth = (progress / 40) * size;

    // Calculate the position of the text dynamically based on size
    const textXPosition = title === 'New' ? (size * 0.9) : 0;

    return (
        <>
            <div className="flex flex-row justify-end items-center gap-4 w-full">
                {title && (
                    <div className="flex justify-end text-[14px] w-[94px] ">
                        {title}
                    </div>
                )}

                <div className="border-[1px] border-gray-200 rounded-sm w-full">
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
                            width="100%"
                            height={height}
                            fill={nonProgressColor}
                            className="rounded"
                            rx={3}
                            ry={3}
                        />

                        <rect
                            x={2}
                            y={2}
                            width={progressWidth}
                            height={height}
                            fill={progresscolor}
                            rx={3}
                            ry={3}
                        />

                        <text
                            x={progressWidth + 5}
                            y={height / 2 + 5}
                            fontSize="12"
                            className="font-bold"
                        >
                            {progress}
                        </text>

                        {title === 'New' ? (
                            <text
                                x={textXPosition +10} // Dynamic position based on size
                                y={height / 2 + 5}
                                fontSize="12"
                                fill="currentColor"
                                className="text-gray-400"
                            >
                                40
                            </text>
                        ) : (
                            ""
                        )}
                    </svg>
                </div>
            </div>
        </>
    );
};

export default LinearProgressBar;
