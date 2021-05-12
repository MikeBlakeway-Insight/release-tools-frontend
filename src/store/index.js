import { configureStore } from '@reduxjs/toolkit'
import auditReducer from '../features/ReleaseAudits/auditSlice'
import projectReducer from '../features/ReleaseAudits/projectSlice'
import versionReducer from '../features/ReleaseAudits/versionSlice'

export default configureStore({
	reducer: {
		audit: auditReducer,
		project: projectReducer,
		version: versionReducer,
	},
})
