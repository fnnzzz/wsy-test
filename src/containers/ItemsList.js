import React, { Component } from 'react'
import Item from '../components/Item'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRedditData } from '../actions/index'
import loader from '../spinner-earth.svg'

const Loader = () => <div style={{ textAlign: 'center', margin: 100 }}>
	<img src={loader} alt="loader"/>
</div>

class ItemsList extends Component {
	componentWillMount() {
		this.props.fetchData()
	}

    render() {
		const { items, filterValue } = this.props

		return items === null
			? <Loader/>
			: <div className="items-list">
				{items
					.filter(({data}) => data.num_comments >= filterValue)
					.sort((a, b) => a.data.num_comments < b.data.num_comments)
					.map(({data}) => <Item key={data.id} {...data} />)}
			</div>
    }
}

const mapStateToProps = ({ items, filterValue }) => ({ items, filterValue })
const mapDispatchToProps = (dispatch) => ({
	fetchData: bindActionCreators(fetchRedditData, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)