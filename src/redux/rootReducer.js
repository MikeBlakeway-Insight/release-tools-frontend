import { combineReducers } from 'redux'
import { reducer as webAuditReducer } from './Audits/webAuditReducer'

export const rootReducer = combineReducers({
	webAudit: webAuditReducer,
})

export default rootReducer
