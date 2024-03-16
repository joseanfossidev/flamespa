import { Link } from '@inertiajs/inertia-react'
import { IMAGES } from '@/constants'

export default function Logo () {
    return (
        <Link
            href="/dashboard"
            className="mr-6 flex-none overflow-hidden"
        >
            <span className="sr-only">Logo Flame Spa</span>
            <img src={IMAGES.LOGO} alt="Logo Flame Spa" className="h-12" />
        </Link>
    )
}
