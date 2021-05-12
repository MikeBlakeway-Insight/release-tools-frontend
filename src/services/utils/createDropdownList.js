export const createDropdownList = async body =>
	await body.map(item => ({
		id: item.id,
		key: item.key,
		text: item.name,
		value: item.key || item.id,
	}))
