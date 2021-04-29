export const performWebAudit = async (auditEndpoint, dispatch) => {
	try {
		dispatch({ type: 'SET_LOADING', payload: true })
		const response = await fetch(auditEndpoint)
		const data = await response.json()
		dispatch({ type: 'SET_AUDIT_DATA', payload: data.webAuditReportLines })
		dispatch({ type: 'SET_LOADING', payload: false })
	} catch (error) {
		error => error.message
		dispatch({ type: 'SET_LOADING', payload: false })
	}
}

export default performWebAudit
