import ACTIONS from '../redux/constants'
const {
	AUDIT__TOGGLE_LOADING,
	AUDIT__UPDATE_DATA,
	AUDIT__ERROR_RETURNED,
} = ACTIONS

export const getAuditData = async (auditEndpoint, dispatch) => {
	try {
		dispatch({ type: AUDIT__TOGGLE_LOADING, payload: true })
		const response = await fetch(auditEndpoint)
		const data = await response.json()
		dispatch({ type: AUDIT__UPDATE_DATA, payload: data.webAuditReportLines })
		dispatch({ type: AUDIT__TOGGLE_LOADING, payload: false })
	} catch (error) {
		error => {
			dispatch({ type: AUDIT__ERROR_RETURNED, payload: error })
			dispatch({ type: AUDIT__TOGGLE_LOADING, payload: false })
		}
	}
}

export default getAuditData
