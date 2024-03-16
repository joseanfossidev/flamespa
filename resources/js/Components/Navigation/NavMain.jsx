import SearchMain from '@/Components/Navigation/SearchMain'
import LinkMain from '@/Components/Navigation/LinkMain'
import { NAV_MAIN } from '@/constants'

export default function NavMain () {
    return (
        <aside className="col-span-12 lg:col-span-2">
            <div className="hidden lg:block fixed pb-20 overflow-y-auto h-full">
                <nav id="nav" className="lg:text-sm lg:leading-6 relative pt-4">
                    <SearchMain />
                    <ul className="px-4">
                        {NAV_MAIN.map((item, index) => <LinkMain key={index} item={item} />)}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
