const initialState = {
	auditData: [],
	fixVersion: '',
	loading: false,
	refresh: false,
	release: {
		loading: false,
		error: '',
		data: [],
	},
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload,
			}
		case 'SET_REFRESH':
			return {
				...state,
				refresh: action.payload,
			}
		case 'SET_FIXVERSION':
			return {
				...state,
				fixVersion: action.payload,
			}
		case 'SET_AUDIT_DATA':
			return {
				...state,
				auditData: action.payload,
			}
		case 'SET_RELEASE_DATA':
			return {
				...state,
				release: {
					...state.release,
					data: action.payload.map(data => ({
						key: data.id,
						text: data.name,
						value: data.id,
					})),
				},
			}
		case 'SET_RELEASE_LOADING':
			return {
				...state,
				release: {
					...state.release,
					loading: action.payload,
				},
			}
		case 'SET_RELEASE_ERROR':
			return {
				...state,
				release: {
					...state.release,
					error: action.payload,
				},
			}
		default:
			return state
	}
}

export default reducer
