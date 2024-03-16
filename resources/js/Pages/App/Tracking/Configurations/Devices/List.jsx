import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import Box from '@/Components/Box'
import Datatable from '@/Components/Datatable'
import Breadcrum from '@/Components/Breadcrum'
import Button from '@/Components/Button'

const DATATABLECONFIG = {
    searchable: true,
    selectable: false,
    columns: [
        {
            label: 'AVL',
            row: row => row.number_avl,
            visible: true
        },
        {
            label: 'IMEI',
            row: row => row.number_imei,
            visible: true
        },
        {
            label: 'Tipo',
            row: row => row.type.name,
            visible: true
        },
        {
            label: 'Nombre',
            row: row => row.name,
            visible: true
        },
        {
            label: 'Teléfono',
            row: row => row.phone_number,
            visible: true
        },
        {
            label: 'Proveedor',
            row: row => row.network_provider,
            visible: true
        },
        {
            label: 'Plan internet',
            row: row => row.network_bandwith,
            visible: true
        },
        {
            label: 'Vendedor',
            row: row => row.provider_supplier,
            visible: true
        }
    ]
}

const BREADCRUM = [
    { label: 'Dispositivos' }
]

export default function DevicesList (props) {
    const { auth, paginate } = props

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="🟢 Dispositivos" />

            <div className="flex justify-between items-center mb-3">
                <Breadcrum items={BREADCRUM} />

                <div className="flex items-center">
                    <Button type="info" onClick={() => console.log('Crear nuevo')}>
                        Crear nuevo
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                    </Button>
                </div>
            </div>

            <Box>
                <Datatable config={DATATABLECONFIG} paginate={paginate} />
            </Box>
        </AuthenticatedLayout>
    )
}
