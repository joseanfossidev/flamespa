const Tbody = ({ config, data }) => {
    return (
        <tbody>
            {data.length === 0 && <tr><td colSpan="6" className='px-2 py-1 flex-1 text-center'>No device types found</td></tr>}
            {data.length > 0 && data.map((deviceType) => (
                <tr key={deviceType.id}
                    className='
                        border-b cursor-pointer transition-all duration-300 ease-in-out
                        border-gray-700
                        hover:bg-gray-700
                        odd:bg-gray-800
                        even:bg-gray-900
                    '
                >
                    {config.selectable && (
                        <th className='w-[30px] text-center'>
                            <input
                                className='form-checkbox h-5 w-5 text-green-400 transition duration-150 ease-in-out cursor-pointer rounded-md'
                                type="checkbox" />
                        </th>
                    )}
                    {config.columns.map((column, index) => (
                        <td key={index}
                            className={`
                                px-2 py-1 flex-1
                                ${!column.visible ? 'hidden' : ''}
                            `}>
                            {column.rowCrop ? column.row(deviceType).slice(0, column.rowCrop) + '...' : column.row(deviceType)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default Tbody
