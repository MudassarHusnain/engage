interface CircularProgressBarProps {
    progress: number;
    size?: number;
    strokeWidth?: number;
}

const PercentageProgressBar: React.FC<CircularProgressBarProps> = ({
    progress,
    size = 40,
    strokeWidth = 5,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <>
            <div
                className=""
                style={{ width: size, height: size }}
            >
                <svg
                    className="transform -rotate-90"
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                >
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        className="text-gray-300"
                    />
                    45
                    {/* Progress Circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        className="text-blue-600"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                </svg>

            </div>
            {/* Centered Text */}
            <div className="py-1 font-bold">
                {progress}<span className="font-normal"> %</span>
                <span className="text-[12px] font-normal block text-gray-400">Response Rate</span>
            </div>
        </>
    );
};

export default PercentageProgressBar;