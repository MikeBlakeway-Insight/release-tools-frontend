import React from 'react'
import Navigation from './layout/Navigation'
import Dashboard from './layout/Dashboard'
import { ColumnLeft, ColumnRight } from './layout/common'

function App() {
	return (
		<>
			<ColumnLeft>
				<Navigation />
			</ColumnLeft>

			<ColumnRight>
				<Dashboard />
			</ColumnRight>
		</>
	)
}

export default App
