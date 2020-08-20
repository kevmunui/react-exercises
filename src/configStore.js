import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './Redux/Reducers/rootReducer'

const loggerMiddleware = createLogger()

const middleware = [thunkMiddleware,loggerMiddleware]

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose
/* eslint-enable */
const enhancer = composeEnhancers(applyMiddleware(...middleware))

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState, enhancer)
}
