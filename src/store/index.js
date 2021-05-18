import { configureStore } from '@reduxjs/toolkit'
import auditReducer from '../redux/auditSlice'
import projectReducer from '../redux/projectSlice'
import versionReducer from '../redux/versionSlice'

export default configureStore({
	reducer: {
		audit: auditReducer,
		project: projectReducer,
		version: versionReducer,
	},
})
