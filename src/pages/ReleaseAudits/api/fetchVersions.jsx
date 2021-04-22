import { api_config } from '../config/api_config'
import { useFetch } from '../../../hooks/useFetch'

export const fetchVersions(projectKey, showReleased, setReleases) {
	// retrieving the url from api_config.versions
	const {
		versions: { url },
	} = api_config

	const endpoint = `${url}${projectKey}'?showReleased='${showReleased}`
	useFetch(endpoint)
	try {
		const response = await fetch(
			url + projectKey + '?showReleased=' + showReleased
		)
		const data = await response.json()
		setReleases(data)
	} catch (error) {
		console.error(error)
	}
}

