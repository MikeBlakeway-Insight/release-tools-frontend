import {
	changeLoading,
	updateData,
	updateError,
} from '../features/ReleaseAudits/auditSlice'

export const getAuditData = async (auditEndpoint, dispatch) => {
	try {
		dispatch(changeLoading(true))
		const response = await fetch(auditEndpoint)
		const data = await response.json()
		dispatch(updateData(data.webAuditReportLines))
		dispatch(changeLoading(false))
	} catch (error) {
		error => {
			dispatch(updateError(error))
			dispatch(changeLoading(false))
		}
	}
}

export default getAuditData
