import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers/index'

const store = createStore(
	appReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /* redux dev tool */,
	applyMiddleware(thunk)
)

export default store