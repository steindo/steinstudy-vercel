import React, { useState, useEffect } from 'react'
import { Sidebar } from './components/common/Sidebar'
import { Header } from './components/common/Header'
import { Dashboard } from './components/Dashboard'
import { ExerciseRunner } from './components/exercises/ExerciseRunner'
import { fetchPageData } from './utils/dataLoader'

function App() {
    const [view, setView] = useState('dashboard') // 'dashboard' or 'exercise'
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const startExercise = async (pageNumber) => {
        setLoading(true)
        const data = await fetchPageData(pageNumber || 1)
        if (data) {
            setPageData(data)
            setView('exercise')
            // Auto-retract on mobile or optionally on exercise start
            if (window.innerWidth < 1024) setSidebarOpen(false)
        }
        setLoading(false)
    }

    return (
        <div className="min-h-screen flex bg-slate-50 transition-all duration-300">
            {/* Fixed Sidebar */}
            <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

            {/* Main Content Area */}
            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${sidebarOpen ? 'lg:ml-0' : ''}`}>
                {loading ? (
                    <div className="flex-1 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : view === 'dashboard' ? (
                    <>
                        <Header />
                        <div className="flex-1 overflow-y-auto">
                            <Dashboard onStartExercise={(num) => startExercise(num)} />
                        </div>
                    </>
                ) : (
                    <ExerciseRunner
                        pageData={pageData}
                        onBack={() => setView('dashboard')}
                        sidebarOpen={sidebarOpen}
                    />
                )}
            </div>
        </div>
    )
}

export default App
