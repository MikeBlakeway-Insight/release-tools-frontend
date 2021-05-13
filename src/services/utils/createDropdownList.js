export const createDropdownList = async body => {
	return await body.map(item => ({
		id: item.id,
		key: item.key,
		text: item.name,
		value: item.key || item.id,
	}))
}
