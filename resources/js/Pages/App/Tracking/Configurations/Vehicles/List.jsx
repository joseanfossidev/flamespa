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
            label: 'Patente',
            row: row => row.patent,
            visible: true
        }
    ]
}

const BREADCRUM = [
    { label: 'Vehículos' }
]

export default function VehiclesList (props) {
    const { auth, paginate } = props

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="🟢 Vehículos" />

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
