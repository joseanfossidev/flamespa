import SelectorCompany from '@/Components/Header/SelectorCompany'
import SelectorTheme from '@/Components/Header/SelectorTheme'
import NavUser from '@/Components/Header/NavUser'
import { NAV_HEADER } from '@/constants'

export default function NavIcons ({ user }) {
    return (
        <div className="relative hidden lg:flex items-center ml-auto">
            <SelectorCompany />
            <div className="flex items-center border-l border-slate-400 ml-6 pl-6 dark:border-slate-800">
                <SelectorTheme />

                {NAV_HEADER.map(({ href, title, icon }, index) => (
                    <a key={index} href={href} className="ml-6 block text-slate-700 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                        <span className="sr-only">{title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                    </a>
                ))}
                <NavUser user={user} />
            </div>
        </div>
    )
}
