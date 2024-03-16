import Logo from '@/Components/Header/Logo'
import SelectorSystem from '@/Components/Header/SelectorSystem'
import NavIcons from '@/Components/Header/NavIcons'

export default function Header ({ user }) {
    return (
        <div className="sticky top-0 z-40 w-full">
            <div className="max-w-8xl mx-auto">
                <div className="py-4 lg:px-8 mx-4 lg:mx-0 bg-gradient-to-b dark:from-slate-900 dark:to-transparent from-gray-300 to-transparent">
                    <div className="relative flex items-center">
                        <Logo />
                        <SelectorSystem />
                        <NavIcons user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}
