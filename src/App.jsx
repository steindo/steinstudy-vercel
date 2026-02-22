import React, { useState } from 'react'
import { Sidebar } from './components/common/Sidebar'
import { Header } from './components/common/Header'
import { Dashboard } from './components/Dashboard'
import { ExerciseRunner } from './components/exercises/ExerciseRunner'
import { mockPage1 } from './data/mockData'

function App() {
    const [view, setView] = useState('dashboard') // 'dashboard' or 'exercise'

    return (
        <div className="min-h-screen flex bg-slate-50">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {view === 'dashboard' ? (
                    <>
                        <Header />
                        <div className="flex-1 overflow-y-auto">
                            <Dashboard onStartExercise={() => setView('exercise')} />
                        </div>
                    </>
                ) : (
                    <ExerciseRunner
                        pageData={mockPage1}
                        onBack={() => setView('dashboard')}
                    />
                )}
            </div>
        </div>
    )
}

export default App
