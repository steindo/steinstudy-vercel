import { Search, CheckCircle, AlertCircle, Info } from 'lucide-react'

export const OverlayContainer = ({ pageData, userAnswers, onAnswerChange, onVerify, sidebarOpen }) => {
    const [zoom, setZoom] = useState(1) // 1 to 2
    if (!pageData) return null

    const toggleZoom = () => {
        setZoom(prev => prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1)
    }

    return (
        <div className="flex flex-col items-center gap-8">
            {/* Zoom & Info bar */}
            <div className="flex items-center gap-4 sticky top-28 z-40">
                <div className="flex bg-white/80 backdrop-blur-md rounded-2xl p-1 shadow-xl shadow-indigo-100/50 border border-slate-200">
                    <button
                        onClick={toggleZoom}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black text-slate-700 hover:bg-slate-50 transition-all uppercase tracking-[0.1em]"
                    >
                        <Search size={16} className="text-indigo-600" />
                        Loupe: {Math.round(zoom * 100)}%
                    </button>
                </div>
            </div>

            <div
                className="relative shadow-[0_32px_64px_rgba(30,41,59,0.12)] border border-slate-200 bg-white group rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top center',
                    width: '100%',
                    maxWidth: sidebarOpen ? '850px' : '1000px',
                    marginBottom: (zoom > 1) ? `${(zoom - 1) * 100}%` : '0'
                }}
            >
                {/* Scan Overlay Header */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 z-50">
                    <div className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" style={{ width: '100%' }} />
                </div>

                {/* Book Scan Image */}
                <img
                    src={pageData.imagePath}
                    alt={`Page ${pageData.pageNumber}`}
                    className="w-full h-auto select-none pointer-events-none opacity-100 transition-opacity duration-1000"
                    loading="lazy"
                    onLoad={() => console.log('Page Loaded')}
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

                {/* Floating Action Button - Advanced Design */}
                <div className="absolute bottom-12 right-12 z-40">
                    <button
                        onClick={onVerify}
                        className="group/btn flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black shadow-2xl hover:bg-indigo-600 hover:scale-110 active:scale-95 transition-all duration-300 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    >
                        <div className="p-1.5 bg-white/20 rounded-full group-hover/btn:rotate-12 transition-transform">
                            <CheckCircle size={20} />
                        </div>
                        <span className="uppercase tracking-widest text-xs">Vérifier mes acquis</span>
                    </button>
                </div>
            </div>

            {/* Hint / Helper section */}
            <div className="max-w-[800px] w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                    <Info size={20} />
                </div>
                <div>
                    <h5 className="font-bold text-slate-800 text-sm mb-1 uppercase tracking-wider">Aide & Astuces</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Tapez votre réponse sur les pointillés. Une fois terminé, cliquez sur le bouton noir qui apparaît en bas à droite pour valider vos réponses. Le système accepte les variantes courantes.
                    </p>
                </div>
            </div>
        </div>
    )
}
