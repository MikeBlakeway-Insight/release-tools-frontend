export const performWebAudit = async (
	updateAuditData,
	auditEndpoint,
	setIsLoading
) => {
	try {
		setIsLoading(true)
		const response = await fetch(auditEndpoint)
		const data = await response.json()
		updateAuditData(data.webAuditReportLines)
		setIsLoading(false)
	} catch (error) {
		error => error.message
		setIsLoading(false)
	}
}
