export const fetchReleases = async (url, dispatch) => {
	dispatch({ type: 'SET_RELEASE_LOADING', payload: true })
	try {
		const res = await fetch(url)
		const body = await res.json()
		dispatch({
			type: 'SET_RELEASE_DATA',
			payload: body,
		})
		dispatch({ type: 'SET_RELEASE_LOADING', payload: false })
	} catch (error) {
		dispatch({ type: 'SET_RELEASE_ERROR', payload: error })
		dispatch({ type: 'SET_RELEASE_LOADING', payload: false })
	}
}

export default fetchReleases
