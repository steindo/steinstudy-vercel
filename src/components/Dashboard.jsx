import React from 'react'
import { Play, ClipboardCheck, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react'

const LessonCard = ({ unit, title, type, color, progress, onStart }) => {
    const colorMap = {
        violet: 'bg-indigo-400',
        orange: 'bg-orange-400',
        blue: 'bg-indigo-500'
    }

    const iconMap = {
        vocabulary: Play,
        practice: ClipboardCheck,
        quiz: HelpCircle
    }

    const Icon = iconMap[type] || Play

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
            <div className={`p-6 ${colorMap[color]} text-white h-48 relative`}>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-lg px-3 py-1 text-[10px] font-bold">
                    {progress}
                </div>
                <p className="text-xs font-medium opacity-80 mb-1">Lesson {unit}</p>
                <h4 className="text-lg font-bold leading-snug max-w-[150px]">{title}</h4>

                <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon size={24} />
                </div>
            </div>

            <div className="p-4 bg-slate-50 flex items-center justify-between border-t border-slate-100">
                <button
                    onClick={onStart}
                    className="text-[11px] font-bold text-indigo-700 hover:underline"
                >
                    {type === 'quiz' ? 'Take Quiz' : type === 'practice' ? 'Start Exercise' : 'Continue Lesson'}
                </button>
                <ChevronRight size={16} className="text-indigo-700" />
            </div>
        </div>
    )
}

export const Dashboard = ({ onStartExercise }) => {
    return (
        <div className="flex-1 p-8 overflow-y-auto bg-white">
            <div className="max-w-6xl mx-auto">
                <header className="mb-10 flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-1">Unit 2: Travel & Holidays</h2>
                        <p className="text-slate-500 text-sm">Page 58 of 300 • Recommended Study: 45m</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </header>

                <section className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-800 tracking-tight">Current Progress</h3>
                        <span className="text-xs text-slate-400 font-medium">6 / 20 Lessons | 3 / 10 Exercises</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-300 to-indigo-600 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <LessonCard
                        unit="Unit 1"
                        title="Linking Words: Addition & Similiarity"
                        type="practice"
                        color="violet"
                        progress="Page 7"
                        onStart={() => onStartExercise(7)}
                    />
                    <LessonCard
                        unit="Unit 1"
                        title="Sentence Gaps: Contextual Vocabulary"
                        type="practice"
                        color="orange"
                        progress="Page 8-9"
                        onStart={() => onStartExercise(8)}
                    />
                    <LessonCard
                        unit="Unit 1"
                        title="Summary & Productive Practice"
                        type="quiz"
                        color="blue"
                        progress="Page 10"
                        onStart={() => onStartExercise(10)}
                    />
                </div>

                <section className="mt-12 bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100 flex justify-between items-center">
                    <div>
                        <p className="text-xs font-bold text-indigo-600 mb-1">Next Up</p>
                        <h4 className="text-xl font-bold text-slate-900">Vocabulary - Word Building</h4>
                        <div className="mt-4 h-1.5 w-64 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <button
                        onClick={() => onStartExercise(7)}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
                    >
                        Resume Learning
                    </button>
                </section>
            </div>
        </div>
    )
}
