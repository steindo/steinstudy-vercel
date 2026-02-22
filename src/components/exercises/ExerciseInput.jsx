import React from 'react'

export const ExerciseInput = ({ id, value, onChange, top, left, width, status }) => {
    const statusClasses = {
        correct: 'bg-emerald-50/50 border-emerald-500 text-emerald-700',
        incorrect: 'bg-red-50/50 border-red-500 text-red-700',
        default: 'border-transparent focus:border-blue-500 focus:bg-blue-50/30'
    }

    return (
        <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => onChange(id, e.target.value)}
            className={`absolute outline-none border-b-2 transition-all duration-300 px-1 text-sm ${status ? statusClasses[status] : statusClasses.default
                }`}
            style={{
                top: top,
                left: left,
                width: width,
                height: '1.5rem'
            }}
        />
    )
}
