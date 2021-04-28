export const fetchReleases = async (
	url,
	{ setError, setIsLoading, setData }
) => {
	setIsLoading(true)
	try {
		const res = await fetch(url)
		const body = await res.json()
		setData(
			body.map(object => ({
				key: object.id,
				text: object.name,
				value: object.id,
			}))
		)
		setIsLoading(false)
	} catch (error) {
		setError(error)
		setIsLoading(false)
	}
}

export default fetchReleases
