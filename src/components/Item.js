import React from 'react'
import Paper from 'material-ui/Paper'
import userIcon from '../user-icon.svg'

const cutHelper = (title = '') => {
	const limit = 150

	if( title.length >= limit) {
		return title.slice(0, limit) + '…'
	}

	return title
}

export default (props) => <div>
		<Paper className="item">
			<div style={{ textAlign: 'center' }}>
				<a target="_blank" href={`https://www.reddit.com${props.permalink}`}>
					<img src={props.thumbnail} alt="item"/>
				</a>
			</div>
			<a target="_blank" href={`https://www.reddit.com${props.permalink}`}>
				<h3>{cutHelper(props.title)}</h3>
			</a>
			<p style={{ fontSize: 15 }}>Number of comments: {props.num_comments}</p>

			<div style={{ marginTop: 30 }}>
				<img style={{ width: 20, verticalAlign: 'middle' }} src={userIcon} alt="author"/>
				&nbsp;&nbsp;
				{props.author}
			</div>
		</Paper>
	</div>