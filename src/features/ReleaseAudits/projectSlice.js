import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
	name: 'project',
	initialState: {
		loading: false,
		error: '',
		projects: [],
		active: '',
	},
	reducers: {
		projectsLoading: (state, action) => {
			return { ...state, loading: action.payload }
		},
		errorReturned: (state, action) => {
			return { ...state, error: action.payload }
		},
		updateProjects: (state, action) => {
			return { ...state, projects: action.payload }
		},
		changeActiveProject: (state, action) => {
			return { ...state, active: action.payload }
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	projectsLoading,
	errorReturned,
	updateProjects,
	changeActiveProject,
} = projectSlice.actions

export default projectSlice.reducer
