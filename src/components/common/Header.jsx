import React from 'react'
import { Search, Bell, Grid, User } from 'lucide-react'

export const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#4F46E5] to-[#3B82F6] text-white p-4 px-8 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-4 flex-1">
                <h2 className="font-bold text-lg hidden md:block">English Learning Course</h2>
                <div className="relative ml-8 w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={16} />
                    <input
                        type="text"
                        placeholder="Search lessons..."
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:bg-white/20 placeholder:text-white/60"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <button className="relative p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 border-2 border-[#4F46E5] rounded-full"></span>
                    </button>
                    <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                        <Grid size={20} />
                    </button>
                </div>

                <div className="h-8 w-[1px] bg-white/20"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold leading-tight">Malik Arch.</p>
                        <p className="text-[10px] text-white/70 leading-tight">Student ID: 4920</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
                        <User size={24} />
                    </div>
                </div>
            </div>
        </header>
    )
}
