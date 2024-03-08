const Tfoot = ({ paginate }) => {
    return (
        <div className='flex items-center justify-between mt-4 gap-3'>
            <div className='text-sm text-gray-700 dark:text-gray-300'>
                Mostrando {paginate.from} a {paginate.to} de {paginate.total} registros
            </div>

            <div className='flex items-center'>
                {paginate.links && (paginate.links.length > 0) && (paginate.links.filter(link => link.url).map((link, index) => (
                    <a key={index}
                        href={link.url}
                        className={`
                            py-2 px-3 rounded hover:text-blue-700 hover:bg-black hover:bg-opacity-10
                            transition-all duration-300 ease-in-out
                            ${link.active ? 'text-blue-500 font-bold' : 'text-gray-500'}
                        `}>
                        {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                    </a>
                )))}
            </div>
        </div>
    )
}

export default Tfoot
