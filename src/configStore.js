import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/Reducers/rootReducer'

const middleware = [thunk]

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
