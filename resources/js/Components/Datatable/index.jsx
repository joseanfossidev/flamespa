import { useEffect, useState } from 'react'
import Thead from './Thead'
import Tbody from './Tbody'
import Tfoot from './Tfoot'
import DatatableSearch from './DatatableSearch'

const Datatable = ({ config, paginate }) => {
    const [datatable, setDatatable] = useState({
        config,
        paginate,
        filters: {
            search: ''
        }
    })

    useEffect(() => {
        setDatatable({
            config,
            paginate,
            filters: {
                search: ''
            }
        })
    }, [config, paginate])

    return (
        <>
            {datatable.config.title && <h1 className='text-2xl font-semibold mb-4'>{datatable.config.title}</h1>}
            <DatatableSearch searchable={datatable.config.searchable} setDatatable={setDatatable} />
            <div className='w-full rounded overflow-x-auto'>
                <table className='w-full leading-normal'>
                    <Thead config={datatable.config} />
                    <Tbody config={datatable.config} data={datatable.paginate.data} />
                </table>
                <Tfoot paginate={datatable.paginate} />
            </div>
        </>
    )
}

export default Datatable
