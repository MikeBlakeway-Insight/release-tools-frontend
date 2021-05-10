import ACTIONS from '../redux/constants'
const {
	FIXVERSION__UPDATE_LIST,
	FIXVERSION__TOGGLE_LOADING,
	FIXVERSION__ERROR_RETURNED,
} = ACTIONS

export const getFixVersions = async (url, dispatch) => {
	dispatch({ type: FIXVERSION__TOGGLE_LOADING, payload: true })
	try {
		const res = await fetch(url)
		const body = await res.json()
		const fixVersions = await body.map(item => ({
			key: item.id,
			text: item.name,
			value: item.id,
		}))
		dispatch({
			type: FIXVERSION__UPDATE_LIST,
			payload: fixVersions,
		})
		dispatch({ type: FIXVERSION__TOGGLE_LOADING, payload: false })
	} catch (error) {
		dispatch({ type: FIXVERSION__ERROR_RETURNED, payload: error })
		dispatch({ type: FIXVERSION__TOGGLE_LOADING, payload: false })
	}
}

export default getFixVersions
