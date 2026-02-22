export const ExerciseInput = ({ id, value, onChange, top, left, width, status }) => {
    const statusHighlight = {
        correct: 'border-emerald-500 bg-emerald-500/10 text-emerald-800 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
        incorrect: 'border-red-500 bg-red-500/10 text-red-800 shadow-[0_0_15px_rgba(239,68,68,0.2)]',
        default: 'border-indigo-400/30 focus:border-indigo-600 focus:bg-indigo-50/20 text-slate-800 focus:shadow-[0_4px_12px_rgba(79,70,229,0.15)]'
    }

    return (
        <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => onChange(id, e.target.value)}
            autoComplete="off"
            className={`absolute outline-none border-b-2 transition-all duration-300 px-2 py-0.5 text-sm font-medium ${status ? statusHighlight[status] : statusHighlight.default
                }`}
            style={{
                top: top,
                left: left,
                width: width,
                height: '1.8rem'
            }}
        />
    )
}
