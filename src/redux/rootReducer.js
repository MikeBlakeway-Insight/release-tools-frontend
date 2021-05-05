import { combineReducers } from 'redux'
import { reducer as releaseAudits } from './Audits/auditsReducer'

export const rootReducer = combineReducers({
	releaseAudits,
})

export default rootReducer
