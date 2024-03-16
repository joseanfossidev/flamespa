import LinkMainSub from '@/Components/Navigation/LinkMainSub'

export default function LinkMain ({ item: { href, title, subnav } }) {
    return (
        <li>
            <a
                className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold hover:text-sky-500"
                href={href}>
                <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                </div>
                {title}
            </a>
            <ul className="space-y-6 lg:space-y-1 border-l border-slate-100 dark:border-slate-800 ml-6 mb-4">
                {subnav.map(({ href, title }, subindex) => (
                    <LinkMainSub key={subindex} href={href} title={title} />
                ))}
            </ul>
        </li>
    )
}
