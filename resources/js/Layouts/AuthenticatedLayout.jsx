import Header from '@/Components/Header/Header'
import NavMain from '@/Components/Navigation/NavMain'

export default function Authenticated ({ user, children }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
            <Header user={user} />
            <div className="grid grid-cols-12 px-4 lg:px-8">
                <NavMain />
                <div className="col-span-12 lg:col-span-10">
                    {children}
                </div>
            </div>
        </div>
    )
}
