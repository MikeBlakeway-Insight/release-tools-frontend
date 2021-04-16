import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './layout/Navigation'
import RoutesMap from './routes/RoutesMap'
import { ColumnLeft, ColumnRight } from './layout/Columns'

function App() {
	return (
		<Router>
			<ColumnLeft>
				<Navigation />
			</ColumnLeft>

			<ColumnRight>
				<RoutesMap />
			</ColumnRight>
		</Router>
	)
}

export default App
