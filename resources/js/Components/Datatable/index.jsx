import { useEffect, useState } from 'react'
import Thead from './Thead'
import Tbody from './Tbody'
import Tfoot from './Tfoot'
import DatatableSearch from './DatatableSearch'
import Button from '@/Components/Button'

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
            <div className='flex justify-between items-center pb-3'>
                <DatatableSearch searchable={datatable.config.searchable} setDatatable={setDatatable} />
                <div className='flex justify-between items-center gap-2'>
                    <Button type="default" onClick={() => console.log('Crear nuevo')}>
                        Filtros avanzados
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-filter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" /></svg>
                    </Button>
                    <Button type="default" onClick={() => console.log('Crear nuevo')}>
                        Exportar
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                    </Button>
                    <Button type="default" onClick={() => console.log('Crear nuevo')}>
                        Importar
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 9l5 -5l5 5" /><path d="M12 4l0 12" /></svg>
                    </Button>
                </div>
            </div>
            <div className='flex-none min-w-full overflow-hidden lg:overflow-auto min-h-[580px] max-h-[580px]'>
                <table className='w-full leading-normal'>
                    <Thead config={datatable.config} />
                    <Tbody config={datatable.config} data={datatable.paginate.data} />
                </table>
            </div>
            <Tfoot paginate={datatable.paginate} />
        </>
    )
}

export default Datatable
