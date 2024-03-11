import { useEffect } from 'react'

const DatatableHooks = ({ config, stateConfig, setStateConfig }) => {
    useEffect(() => {
        const datatableConfig = localStorage.getItem('datatableConfig')
        if (datatableConfig) {
            const parsedConfig = JSON.parse(datatableConfig)
            config.columns.forEach((column, index) => {
                if (parsedConfig.columns[index]) {
                    column.visible = parsedConfig.columns[index].visible
                }
            })

            setStateConfig(parsedConfig)
        } else {
            localStorage.setItem('datatableConfig', JSON.stringify(config))
        }
    }, [config])

    const changeVisibleColumns = (index) => {
        console.log('changeVisibleColumns')
        const visibleColumns = stateConfig.columns.filter(column => column.visible).length

        if (visibleColumns === 1 && stateConfig.columns[index].visible) return

        const newConfig = { ...stateConfig }
        newConfig.columns[index].visible = !newConfig.columns[index].visible

        localStorage.setItem('datatableConfig', JSON.stringify(newConfig))
    }

    return {
        changeVisibleColumns,
        stateConfig
    }
}

export default DatatableHooks
