import {
	changeLoading,
	updateError,
	updateVersions,
} from '../features/ReleaseAudits/versionSlice'

export const getFixVersions = async (url, dispatch) => {
	dispatch(changeLoading(true))

	try {
		const res = await fetch(url)
		const body = await res.json()
		const fixVersions = await body.map(item => ({
			key: item.id,
			text: item.name,
			value: item.id,
		}))
		dispatch(updateVersions(fixVersions))
		dispatch(changeLoading(false))
	} catch (error) {
		dispatch(updateError(error))
		dispatch(changeLoading(false))
	}
}

export default getFixVersions
