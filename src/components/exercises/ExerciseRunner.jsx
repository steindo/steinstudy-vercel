import React from 'react'
import { OverlayContainer } from './OverlayContainer'
import { ChevronLeft, Save } from 'lucide-react'
import { useProgress, validateAnswer } from '../../hooks/useExercise'

export const ExerciseRunner = ({ pageData, onBack, sidebarOpen }) => {
    const { answers, updateAnswer, saveAnswers } = useProgress(pageData.pageNumber)

    // Calculate progress
    const interactiveElements = pageData.elements.filter(el => el.type === 'text')
    const filledCount = interactiveElements.filter(el => answers[el.id]).length
    const totalCount = interactiveElements.length

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
                <div className="flex items-center gap-6">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500 hover:text-indigo-600 group"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded uppercase tracking-wider">Unit 1</span>
                            <h2 className="text-xl font-black text-slate-900 leading-tight">
                                Page {pageData.pageNumber}
                            </h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 h-1.5 w-24 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-indigo-500 transition-all duration-500"
                                    style={{ width: `${(filledCount / totalCount) * 100}%` }}
                                />
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                {filledCount} / {totalCount} Completed
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Auto-save Ready</span>
                    </div>
                    <button
                        onClick={() => saveAnswers(answers)}
                        className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
                    >
                        <Save size={18} />
                        Save Work
                    </button>
                </div>
            </header>

            {/* Mission Instructions */}
            {pageData.instructions && (
                <div className="bg-indigo-600/95 text-white py-3 px-8 flex items-center gap-3 animate-in slide-in-from-top duration-500 z-20 shadow-lg">
                    <div className="p-1.5 bg-white/20 rounded-lg">
                        <Play size={14} className="fill-current" />
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Objective</span>
                        <p className="text-sm font-bold tracking-tight">{pageData.instructions}</p>
                    </div>
                </div>
            )}

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
