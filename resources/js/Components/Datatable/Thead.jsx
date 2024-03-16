import TheadSearch from './TheadSearch'
import TheadSort from './TheadSort'
import handleSelectAll from '@/Utils/Datatable/SelectAll'

const Thead = ({ config }) => {
    return (
        <thead className='sticky top-0 z-20'>
            <tr className='
                border-b border-gray-200 dark:border-gray-800
                font-bold text-center bg-gray-200 dark:bg-gray-950'>
                {config.selectable && (
                    // TODO: fijar el checkbox
                    // <th className='w-[30px] sticky left-0 h-fit text-center bg-gray-200 dark:bg-gray-950 px-2'>
                    <th className='w-[30px] text-center bg-gray-200 dark:bg-gray-950 px-2'>
                        <input
                            className='form-checkbox h-5 w-5 text-sky-400 transition duration-150 ease-in-out cursor-pointer rounded-md'
                            onClick={handleSelectAll}
                            type="checkbox" />
                    </th>
                )}

                {config.columns.map((column, index) => (
                    <th key={index}
                        className={`
                            px-2 py-1 min-w-24
                            ${!column.visible ? 'hidden' : ''}
                            ${column.width ? column.width : ''}
                        `
                    }>

                        <div className='flex gap-2 justify-between items-center'>
                            {!column.sortable && (column.labelCrop ? column.label.slice(0, column.labelCrop) : column.label)}
                            <TheadSort column={column} />
                            <TheadSearch column={column} />
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default Thead
