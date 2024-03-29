import { router } from '@inertiajs/react'

const DatatableSearch = ({ searchable, setDatatable }) => {
    const handleChange = e => {
        setDatatable(prevState => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                search: e.target.value
            }
        }))

        const url = new URL(window.location.href)

        url.searchParams.set('page', 1)
        url.searchParams.set('search', e.target.value)

        router.visit(url.toString(), {
            preserveState: true
        })
    }

    return searchable && (
        <div>
            <input
                type='text'
                className='w-full rounded h-10
                    text-gray-700 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                placeholder='Buscar...'
                defaultValue={new URL(window.location.href).searchParams.get('search')}
                onChange={e => handleChange(e)}
            />
        </div>
    )
}

export default DatatableSearch
