import {
	changeLoading,
	updateData,
	errorReturned,
} from '../features/redux/auditSlice'

export const getAuditData = async (auditEndpoint, dispatch) => {
	try {
		dispatch(changeLoading(true))
		const response = await fetch(auditEndpoint)
		const data = await response.json()
		data?.webAuditReportLines && dispatch(updateData(data.webAuditReportLines))
		data?.itcAuditReportLines && dispatch(updateData(data.itcAuditReportLines))
		dispatch(changeLoading(false))
	} catch (error) {
		dispatch(errorReturned(error))
		dispatch(changeLoading(false))
	}
}

export default getAuditData
