import { configureStore } from '@reduxjs/toolkit'
import auditReducer from '../redux/auditSlice'
import projectReducer from '../redux/projectSlice'
import versionReducer from '../redux/versionSlice'

export default function createTestStore() {
	const store = configureStore({
		reducer: {
			audit: auditReducer,
			project: projectReducer,
			version: versionReducer,
		},
	})
	return store
}
