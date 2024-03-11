const TheadSort = ({ column }) => {
    return column.sortable && (
        <button
            className='flex gap-2 items-center cursor-pointer hover:text-gray-500'
            onClick={() => alert('ordenando...')}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            {column.labelCrop ? column.label.slice(0, column.labelCrop) : column.label}
        </button>
    )
}

export default TheadSort
