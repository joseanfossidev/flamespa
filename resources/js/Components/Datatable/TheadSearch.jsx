const TheadSearch = ({ column }) => {
    return column.searchable && (
        <div className='flex gap-1 items-center text-gray-700'>
            <input
                className='bg-transparent px-1 py-0 border-0 w-auto focus:outline-none focus:ring-0 focus:border-0 active:outline-none active:ring-0 active:border-0 focus:text-yellow-400 text-right'
                type='text'
                placeholder='Buscar aquí ...'
            />
            <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </div>
    )
}

export default TheadSearch
