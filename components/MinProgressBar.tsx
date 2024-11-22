import React from "react";

interface MinProgressBarProps {
  minutes: number; // Progress value in minutes (0–60)
  size?: number; // Diameter of the circle
  strokeWidth?: number; // Thickness of the progress bar
}

const MinProgressBar: React.FC<MinProgressBarProps> = ({
  minutes,
  size = 80,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (minutes / 60) * circumference; // Offset for progress

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* SVG for the circular progress bar */}
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-300"
        />
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
      {/* Centered Text */}
      <span className="absolute text-blue-600 font-bold text-sm">
        {minutes}m
      </span>
    </div>
  );
};

export default MinProgressBar;
