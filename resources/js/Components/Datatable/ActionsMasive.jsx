const ActionsMasive = ({ config }) => {
    const handleClick = (e, action) => {
        alert('pre')
        action.handle()
        alert('post')
    }

    return config.selectable && (
        <div className='flex mb-3'>
            {config.actionsSelectable && config.actionsSelectable.map((action, index) => (
                <button
                    key={index}
                    onClick={(e) => handleClick(e, action)}
                    className={`
                        first:rounded-s
                        last:rounded-e
                        text-sm
                        text-white font-bold p-1 px-3
                        ${action.color ? action.color : 'bg-gray-500 hover:bg-gray-700'}
                    `}
                >{action.label}</button>
            ))}
        </div>
    )
}

export default ActionsMasive
