import { configureStore } from '@reduxjs/toolkit'
import auditReducer from '../features/ReleaseAudits/auditSlice'
import versionReducer from '../features/ReleaseAudits/versionSlice'

export default configureStore({
	reducer: {
		audit: auditReducer,
		version: versionReducer,
	},
})
