import { createSlice } from '@reduxjs/toolkit'

export const auditSlice = createSlice({
	name: 'audit',
	initialState: {
		loading: false,
		error: '',
		data: [],
	},
	reducers: {
		changeLoading(state, action) {
			return { ...state, loading: action.payload }
		},
		updateData(state, action) {
			return { ...state, data: action.payload }
		},
		errorReturned(state, action) {
			return { ...state, error: action.payload }
		},
	},
})

// Action creators are generated for each case reducer function
export const { changeLoading, updateData, errorReturned } = auditSlice.actions

export default auditSlice.reducer
