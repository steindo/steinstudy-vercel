import React, { useState } from 'react'
import { ExerciseInput } from './ExerciseInput'
import { CheckCircle } from 'lucide-react'

export const OverlayContainer = ({ pageData, userAnswers, onAnswerChange, onVerify }) => {
    if (!pageData) return null

    return (
        <div className="relative max-w-4xl mx-auto my-8 shadow-2xl border border-slate-200 overflow-hidden bg-white group">
            {/* Book Scan Image */}
            <img
                src={pageData.imagePath}
                alt={`Page ${pageData.pageNumber}`}
                className="w-full h-auto select-none pointer-events-none"
            />

            {/* Interactivity Overlay */}
            <div className="absolute inset-0">
                {pageData.elements.map((el) => (
                    el.type === 'text' && (
                        <ExerciseInput
                            key={el.id}
                            id={el.id}
                            top={el.top}
                            left={el.left}
                            width={el.width}
                            value={userAnswers[el.id] || ''}
                            onChange={onAnswerChange}
                            status={userAnswers[`${el.id}_status`]}
                        />
                    )
                ))}
            </div>

            {/* Floating Action Button */}
            <button
                onClick={onVerify}
                className="absolute bottom-6 right-6 flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-indigo-700 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
            >
                <CheckCircle size={20} />
                Vérifier
            </button>
        </div>
    )
}
