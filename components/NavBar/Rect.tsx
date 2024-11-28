import React from 'react'

function Rect() {
    return (
        <div>
            <svg width="100%" height="50">
                <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="3"
                    fill="none"
                    stroke="rgba(31, 31, 31, 1)"
                    strokeWidth="3"
                    className="rounded"
                />
            </svg>
        </div>
    )
}

export default Rect