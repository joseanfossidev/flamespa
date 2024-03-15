import TheadSearch from './TheadSearch'
import TheadSort from './TheadSort'
import handleSelectAll from '@/Utils/Datatable/SelectAll'

const Thead = ({ config }) => {
    return (
        <thead>
            <tr className='border-b font-bold  text-center border-gray-700 bg-gray-200 dark:bg-gray-950'>
                {config.selectable && (
                    <th className='w-[30px] text-center'>
                        <input
                            className='form-checkbox h-5 w-5 text-sky-400 transition duration-150 ease-in-out cursor-pointer rounded-md'
                            onClick={handleSelectAll}
                            type="checkbox" />
                    </th>
                )}

                {config.columns.map((column, index) => (
                    <th key={index}
                        className={`
                            px-2 py-1
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
