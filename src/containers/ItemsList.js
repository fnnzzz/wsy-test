import React, { Component } from 'react'
import Item from '../components/Item'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRedditData } from '../actions/index'
import loader from '../spinner-earth.svg'
import sortBy from 'lodash/sortBy'


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
				{
					sortBy(
						items.filter(({data}) => data.num_comments >= filterValue),
						(item) => item.data.num_comments
					).map(({data}) => <Item key={data.id} {...data} />)
				}
			</div>
    }
}

const mapStateToProps = ({ items, filterValue }) => ({ items, filterValue })
const mapDispatchToProps = (dispatch) => ({
	fetchData: bindActionCreators(fetchRedditData, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)