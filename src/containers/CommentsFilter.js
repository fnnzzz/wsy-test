import React, { Component } from 'react'
import Slider from 'material-ui/Slider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeFilterValue } from '../actions/index'


class CommentsFilter extends Component {
	render() {
		const { isLoading, filterValue, changeFilterValue, maxFilterValue } = this.props

		return maxFilterValue === 2 ? null : <div>
			<Slider onChange={(e, val) => changeFilterValue(val)} disabled={isLoading} defaultValue={filterValue} min={1} step={1} max={maxFilterValue} />
			<h3>Current filter: {filterValue}</h3>
		</div>
	}
}

const mapStateToProps = ({ state, filterValue, maxFilterValue }) => ({
	isLoading: state && !state.items,
	filterValue,
	maxFilterValue
})

const mapDispatchToProps = (dispatch) => ({
	changeFilterValue: bindActionCreators(changeFilterValue, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsFilter)