import React from 'react'
import { CheckCircle, Home, BookOpen, Settings, BarChart, ChevronLeft, ChevronRight, Menu } from 'lucide-react'

const SidebarItem = ({ icon: Icon, label, active, completed, isCollapsed }) => (
    <div className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all ${active ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-600 hover:bg-slate-200/50'
        } ${isCollapsed ? 'justify-center px-0' : ''}`}>
        <Icon size={18} />
        {!isCollapsed && (
            <>
                <span className="text-sm font-medium whitespace-nowrap overflow-hidden transition-all">{label}</span>
                {completed && <CheckCircle size={14} className="ml-auto text-emerald-500" />}
            </>
        )}
    </div>
)

export const Sidebar = ({ isOpen, onToggle }) => {
    return (
        <aside className={`${isOpen ? 'w-72' : 'w-20'} bg-[#F8FAFC] border-r border-slate-200 p-6 flex flex-col gap-8 h-screen sticky top-0 transition-all duration-300 ease-in-out z-50`}>
            <div className={`flex items-center gap-2 px-2 ${!isOpen ? 'justify-center' : 'justify-between'}`}>
                {isOpen ? (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">S</div>
                            <span className="font-bold text-slate-800 text-lg uppercase tracking-tight">SteinStudy</span>
                        </div>
                        <button onClick={onToggle} className="p-1 hover:bg-slate-200 rounded-lg transition-colors">
                            <ChevronLeft size={20} className="text-slate-400" />
                        </button>
                    </>
                ) : (
                    <button onClick={onToggle} className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                        <Menu size={20} className="text-slate-600" />
                    </button>
                )}
            </div>

            <div className="space-y-1">
                {isOpen && <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 transition-opacity">Main Menu</p>}
                <SidebarItem icon={Home} label="Dashboard" active isCollapsed={!isOpen} />
                <SidebarItem icon={BookOpen} label="My Units" isCollapsed={!isOpen} />
                <SidebarItem icon={BarChart} label="Statistics" isCollapsed={!isOpen} />
                <SidebarItem icon={Settings} label="Settings" isCollapsed={!isOpen} />
            </div>

            {isOpen && (
                <div className="space-y-1 mt-4 transition-all animate-in fade-in slide-in-from-left-4">
                    <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">My Progress</p>
                    <div className="px-4 py-2">
                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                            <span>Overall</span>
                            <span>45%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2 italic">54 / 300 Pages Completed</p>
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="mt-auto bg-white p-4 rounded-xl shadow-sm border border-slate-100 transition-all animate-in fade-in slide-in-from-bottom-4">
                    <p className="text-xs font-bold text-slate-800 mb-1">Next Lesson</p>
                    <p className="text-[10px] text-slate-500 mb-3">Unit 3: Work & Careers</p>
                    <button className="w-full py-2 bg-slate-900 text-white text-[11px] font-bold rounded-lg hover:bg-slate-800 transition-colors">
                        Resume Learning
                    </button>
                </div>
            )}
        </aside>
    )
}
