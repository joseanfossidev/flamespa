export default function SearchMain () {
    return (
        <div className="sticky pointer-events-none">
            <div className="relative pointer-events-auto px-4">
                <button type="button" className="hidden w-full lg:flex items-center text-sm leading-6 shadow-sm py-1.5 pl-2 pr-3
                    text-slate-700 rounded-md ring-1 ring-slate-900/10
                    hover:ring-slate-300 dark:bg-slate-300 dark:highlight-white/5 dark:hover:bg-slate-400
                    bg-white hover:bg-slate-100
                ">
                    <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none">
                        <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
                    </svg>
                    Buscador general...<span className="ml-auto pl-3 flex-none text-xs font-semibold">⌘K</span>
                </button>
            </div>
            <div className="h-8"></div>
        </div>
    )
}
