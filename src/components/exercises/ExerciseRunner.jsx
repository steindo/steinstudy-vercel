import React from 'react'
import { OverlayContainer } from './OverlayContainer'
import { ChevronLeft, Save } from 'lucide-react'
import { useProgress, validateAnswer } from '../../hooks/useExercise'

export const ExerciseRunner = ({ pageData, onBack }) => {
    const { answers, updateAnswer, saveAnswers } = useProgress(pageData.pageNumber)

    const handleVerify = () => {
        const newAnswers = { ...answers }
        pageData.elements.forEach(el => {
            if (el.type === 'text') {
                const result = validateAnswer(answers[el.id], el.answer)
                newAnswers[`${el.id}_status`] = result
            }
        })
        saveAnswers(newAnswers)
    }

    return (
        <div className="flex-1 bg-slate-100 overflow-y-auto">
            <div className="bg-white border-b border-slate-200 sticky top-0 z-10 px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div>
                        <h3 className="font-bold text-slate-800">Unit {pageData.pageNumber}: Exercise Mode</h3>
                        <p className="text-xs text-slate-500">Practice your skills • Auto-saving enabled</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-100">
                        <Save size={14} />
                        Saved
                    </div>
                </div>
            </div>

            <div className="p-8 pb-24">
                <OverlayContainer
                    pageData={pageData}
                    userAnswers={answers}
                    onAnswerChange={updateAnswer}
                    onVerify={handleVerify}
                />
            </div>
        </div>
    )
}
