import { configureStore } from '@reduxjs/toolkit'
import auditReducer from '../features/redux/auditSlice'
import projectReducer from '../features/redux/projectSlice'
import versionReducer from '../features/redux/versionSlice'

export default configureStore({
	reducer: {
		audit: auditReducer,
		project: projectReducer,
		version: versionReducer,
	},
})
