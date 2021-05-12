import {
	changeLoading,
	errorReturned,
	updateVersions,
} from '../features/ReleaseAudits/versionSlice'

import { createDropdownList } from './utils/createDropdownList'

export const getFixVersions = async (url, dispatch) => {
	dispatch(changeLoading(true))

	try {
		const res = await fetch(url)
		const body = await res.json()
		const fixVersions = await createDropdownList(body)
		dispatch(updateVersions(fixVersions))
		dispatch(changeLoading(false))
	} catch (error) {
		dispatch(errorReturned(error))
		dispatch(changeLoading(false))
	}
}

export default getFixVersions
