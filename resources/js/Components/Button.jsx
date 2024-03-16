const TYPES = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-200',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-200',
    info: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-200',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-200',
    default: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',

    primaryLight: 'bg-sky-100 text-sky-600 hover:bg-sky-200 focus:ring-sky-200',
    successLight: 'bg-green-100 text-green-600 hover:bg-green-200 focus:ring-green-200',
    infoLight: 'bg-blue-100 text-blue-600 hover:bg-blue-200 focus:ring-blue-200',
    dangerLight: 'bg-red-100 text-red-600 hover:bg-red-200 focus:ring-red-200',
    warningLight: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200 focus:ring-yellow-200',

    link: 'text-blue-500 hover:underline focus:ring-blue-200'
}

export default function Button ({ children, onClick, type, className }) {
    return (
        <button className={`
            group inline-flex gap-1 items-center h-9 rounded-full text-sm font-semibold
            whitespace-nowrap px-4 focus:outline-none focus:ring-2
            transition duration-300 ease-in-out scale-100
            ${className}
            ${TYPES[type]}
        `} onClick={onClick}>
            {children}
        </button>
    )
}
