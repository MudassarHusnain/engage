interface CircularProgressBarProps {
    progress: number;
    size?: number;
    strokeWidth?: number;
}

const PercentageProgressBar: React.FC<CircularProgressBarProps> = ({
    progress,
    size = 40,
    strokeWidth = 4,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <>
            <div
                className="relative flex items-center justify-center"
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
            <div className="absolute text-blue-600 font-bold">
                {progress}%
            </div>
        </>
    );
};

export default PercentageProgressBar;