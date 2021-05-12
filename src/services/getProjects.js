import { API_CONSTANTS } from '../constants/api'
const { projects: api } = API_CONSTANTS
import {
	projectsLoading,
	errorReturned,
	updateProjects,
} from '../features/ReleaseAudits/projectSlice'
import { createDropdownList } from './utils/createDropdownList'

export const getProjects = async dispatch => {
	try {
		dispatch(projectsLoading(true))

		const res = await fetch(api.url)
		const body = await res.json()

		const allowedProjects = await body.filter(value =>
			api.allowed.includes(value.key)
		)

		const projects = await createDropdownList(allowedProjects)

		dispatch(updateProjects(projects))
		dispatch(projectsLoading(false))
	} catch (error) {
		dispatch(errorReturned(error))
		dispatch(projectsLoading(false))
	}
}

export default getProjects
