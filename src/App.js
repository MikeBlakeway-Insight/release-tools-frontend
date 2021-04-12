import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './layout/Navigation'
import { routesConfig } from './routes/config'
import Dashboard from './layout/Dashboard'

import { ColumnLeft, ColumnRight } from './layout/common'

function App() {
	return (
		<Router>
			<ColumnLeft>
				<Navigation />
			</ColumnLeft>

			<ColumnRight>
				<Switch>
					{routesConfig.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
			</ColumnRight>
		</Router>
	)
}
function RouteWithSubRoutes(route) {
	return (
		<Route exact path={route.path}>
			<Dashboard>
				<route.component />
			</Dashboard>
		</Route>
	)
}

export default App
