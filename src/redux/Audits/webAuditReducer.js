const initialState = {
	fixVersion: '',
	auditData: [],
	refresh: false,
	isLoading: false,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.payload,
			}
		default:
			return state
	}
}

export default reducer
