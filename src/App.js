import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Navigation from './layout/Navigation/Navigation'
import RoutesMap from './routes/RoutesMap'
import { ColumnLeft, ColumnRight } from './layout/Grid/Columns'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<ColumnLeft>
					<Navigation />
				</ColumnLeft>

				<ColumnRight>
					<RoutesMap />
				</ColumnRight>
			</Router>
		</Provider>
	)
}

export default App
