export const OverlayContainer = ({ pageData, userAnswers, onAnswerChange, onVerify, sidebarOpen }) => {
    const [zoom, setZoom] = useState(1) // 1 to 2
    if (!pageData) return null

    const toggleZoom = () => {
        setZoom(prev => prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1)
    }

    return (
        <div className="flex flex-col items-center gap-6">
            {/* Zoom Controls */}
            <div className="flex bg-white rounded-full p-1 shadow-lg border border-slate-200 sticky top-24 z-20">
                <button
                    onClick={toggleZoom}
                    className="flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all uppercase tracking-widest"
                >
                    <Search size={14} className="text-indigo-600" />
                    Zoom: {Math.round(zoom * 100)}%
                </button>
            </div>

            <div
                className="relative shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-slate-200 bg-white group rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top center',
                    width: '100%',
                    maxWidth: sidebarOpen ? '800px' : '950px',
                    marginBottom: (zoom > 1) ? `${(zoom - 1) * 100}%` : '0'
                }}
            >
                {/* Book Scan Image */}
                <img
                    src={pageData.imagePath}
                    alt={`Page ${pageData.pageNumber}`}
                    className="w-full h-auto select-none pointer-events-none"
                    loading="lazy"
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

                {/* Floating Action Button - Polished */}
                <div className="absolute bottom-8 right-8 z-40">
                    <button
                        onClick={onVerify}
                        className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                    >
                        <CheckCircle size={22} />
                        Vérifier mes réponses
                    </button>
                </div>
            </div>
        </div>
    )
}
