import { router } from '@inertiajs/react'

export default function DatatablePerPage ({ paginate }) {
    const handleChange = e => {
        const url = new URL(window.location.href)

        url.searchParams.set('per_page', e.target.value)

        router.visit(url.toString(), {
            preserveState: true
        })
    }

    return (
        <>
            <select
                defaultValue={paginate.per_page}
                onChange={e => handleChange(e)}
                className='
                    w-20 h-9 rounded text-sm mx-1
                    text-gray-700 border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50
                    '>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
            registros por página.
        </>
    )
}
