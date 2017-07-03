import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/* for material-ui */
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../store'
import { Provider } from 'react-redux'
import CommentsFilter from './CommentsFilter'
import ItemsList from './ItemsList'
injectTapEventPlugin();


class App extends Component {
	render() {
		return <Provider store={store}>
			<MuiThemeProvider>
				<div>
					<AppBar title="WeSoftYou test" />
					<div className="app-wrap">
						<CommentsFilter/>
						<ItemsList/>
					</div>
				</div>
			</MuiThemeProvider>
		</Provider>
	}
}

export default App