export default function Box ({ children }) {
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded">
            <div className="p-6 text-gray-900 dark:text-gray-100">
                {children}
            </div>
        </div>
    )
}
