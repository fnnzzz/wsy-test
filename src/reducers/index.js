import constants from '../constants'

const initialState = {
	items: null,
	filterValue: 1,
	maxFilterValue: 2
}

const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case constants['DATA_FULFILLED']:
			return {...state, items: action.items}
		case constants['CHANGE_FILTER_VALUE']:
			return {...state, filterValue: action.value}
		case constants['CHANGE_MAX_FILTER_VALUE']:
			return {...state, maxFilterValue: action.max}
		default:
			return state
	}
}

export default appReducer