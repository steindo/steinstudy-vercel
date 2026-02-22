import React from 'react'
import { CheckCircle, Circle, Home, BookOpen, Settings, BarChart } from 'lucide-react'

const SidebarItem = ({ icon: Icon, label, active, completed }) => (
    <div className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all ${active ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-600 hover:bg-slate-200/50'
        }`}>
        <Icon size={18} />
        <span className="text-sm font-medium">{label}</span>
        {completed && <CheckCircle size={14} className="ml-auto text-emerald-500" />}
    </div>
)

export const Sidebar = () => {
    return (
        <aside className="w-72 bg-[#F8FAFC] border-r border-slate-200 p-6 flex flex-col gap-8 h-screen sticky top-0">
            <div className="flex items-center gap-2 px-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">S</div>
                <span className="font-bold text-slate-800 text-lg uppercase tracking-tight">SteinStudy</span>
            </div>

            <div className="space-y-1">
                <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
                <SidebarItem icon={Home} label="Dashboard" active />
                <SidebarItem icon={BookOpen} label="My Units" />
                <SidebarItem icon={BarChart} label="Statistics" />
                <SidebarItem icon={Settings} label="Settings" />
            </div>

            <div className="space-y-1 mt-4">
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

            <div className="mt-auto bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <p className="text-xs font-bold text-slate-800 mb-1">Next Lesson</p>
                <p className="text-[10px] text-slate-500 mb-3">Unit 3: Work & Careers</p>
                <button className="w-full py-2 bg-slate-900 text-white text-[11px] font-bold rounded-lg hover:bg-slate-800 transition-colors">
                    Resume Learning
                </button>
            </div>
        </aside>
    )
}
