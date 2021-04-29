export const performWebAudit = async (
	updateAuditData,
	auditEndpoint,
	dispatch
) => {
	try {
		dispatch({ type: 'SET_LOADING', payload: true })
		// set loading state from redux
		const response = await fetch(auditEndpoint)
		const data = await response.json()
		updateAuditData(data.webAuditReportLines)
		dispatch({ type: 'SET_LOADING', payload: false })
	} catch (error) {
		error => error.message
		dispatch({ type: 'SET_LOADING', payload: false })
	}
}

export default performWebAudit
