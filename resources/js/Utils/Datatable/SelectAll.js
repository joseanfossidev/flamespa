export default function handleSelectAll (e) {
    const tableCurrent = e.target.closest('table')
    const inputs = tableCurrent.querySelectorAll('tbody input[type="checkbox"]')
    inputs.forEach(input => { input.checked = !input.checked })
}
