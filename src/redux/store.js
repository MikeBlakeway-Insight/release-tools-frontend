import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import logger from '../middleware/logger'

import { rootReducer } from './rootReducer'

const middleware = [thunk]

// if (process.env.NODE_ENV === 'development') {
// 	middleware.push(logger)
// }

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
