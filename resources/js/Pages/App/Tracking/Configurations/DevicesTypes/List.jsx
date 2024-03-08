import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import Datatable from '@/Components/Datatable'

const DatatableConfig = {
    title: 'Tipos de dispositivos',
    searchable: true,
    columns: [
        {
            label: 'Description',
            row: row => row.name,
            visible: true
        },
        {
            label: 'Móvil',
            row: row => row.name,
            visible: true
        },
        {
            label: 'Piloto',
            row: row => row.name,
            visible: true
        }
    ]
}

export default function DevicesTypesList (props) {
    const { auth, paginate } = props

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="pt-12 pb-4">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Datatable
                                config={DatatableConfig}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
