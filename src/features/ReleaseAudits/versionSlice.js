import { createSlice } from '@reduxjs/toolkit'

export const versionSlice = createSlice({
	name: 'version',
	initialState: {
		showReleased: true,
		refresh: false,
		loading: false,
		error: '',
		versions: [],
		active: '',
	},
	reducers: {
		changeLoading: (state, action) => {
			return { ...state, loading: action.payload }
		},
		updateError: (state, action) => {
			return { ...state, error: action.payload }
		},
		updateVersions: (state, action) => {
			return { ...state, versions: action.payload }
		},
		changeShowReleased: (state, action) => {
			return { ...state, showReleased: action.payload }
		},
		changeRefresh: (state, action) => {
			return { ...state, refresh: action.payload }
		},
		changeActiveVersion: (state, action) => {
			return { ...state, active: action.payload }
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	changeLoading,
	updateError,
	updateVersions,
	changeShowReleased,
	changeRefresh,
	changeActiveVersion,
} = versionSlice.actions

export default versionSlice.reducer
