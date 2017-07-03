import constants from '../constants'

export const fetchRedditData = (url = 'https://www.reddit.com/r/aww.json') => (dispatch, getState) => {
	fetch(url).then(r => r.json()).then(({data}) => {
		dispatch({ type: constants['DATA_FULFILLED'], items: data.children })

		if( getState().maxFilterValue === 2 ) {
			dispatch({
				type: constants['CHANGE_MAX_FILTER_VALUE'],
				max: Math.max.apply(Math, data.children.map((item) => item.data.num_comments))
			})
		}
	})
}

export const changeFilterValue = (value = 1) => ({
	type: constants['CHANGE_FILTER_VALUE'], value
})