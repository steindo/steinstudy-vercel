import React from 'react'
import { OverlayContainer } from './OverlayContainer'
import { ChevronLeft, Save } from 'lucide-react'
import { useProgress, validateAnswer } from '../../hooks/useExercise'

export const ExerciseRunner = ({ pageData, onBack, sidebarOpen }) => {
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
        <div className="flex-1 flex flex-col min-h-0 bg-slate-100/50 transition-all duration-300">
            {/* Exercise Header */}
            <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500 hover:text-indigo-600 group"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 leading-tight">
                            Page {pageData.pageNumber}
                        </h2>
                        <p className="text-xs text-slate-500 font-medium"> SteinStudy Interactive Courseware</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="hidden md:inline text-xs font-bold text-slate-400 mr-2 uppercase tracking-widest leading-none">Auto-saving enabled</span>
                    <button
                        onClick={() => saveAnswers(answers)}
                        className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                    >
                        <Save size={16} className="text-indigo-600" />
                        Save Progress
                    </button>
                </div>
            </header>

            {/* Exercise Content Area */}
            <div className="flex-1 overflow-y-auto w-full">
                <div className="max-w-[1200px] mx-auto p-4 md:p-12 pb-32">
                    <OverlayContainer
                        pageData={pageData}
                        userAnswers={answers}
                        onAnswerChange={updateAnswer}
                        onVerify={handleVerify}
                        sidebarOpen={sidebarOpen}
                    />
                </div>
            </div>
        </div>
    )
}
