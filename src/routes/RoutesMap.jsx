import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routesConfig } from './config'
import { ContainerWithHeader } from '../layout/ContainerWithHeader'

/**
 * ==============
 * * -- RoutesMap Component -- *
 *
 * Location:
 * src/routes/RoutesMap.jsx
 *
 * Description
 * The RoutesMap component creates a route for each object in the routesConfig
 * array. To edit routes you need only add/remove them from the routes/config.js
 * file that it is exported from.
 */
export const RoutesMap = () => {
	return (
		<Switch>
			{routesConfig.map((route, i) => (
				<Route key={i} exact={route.exact} path={route.path}>
					<ContainerWithHeader title={route.title} subTitle={route.subTitle}>
						<route.component />
					</ContainerWithHeader>
				</Route>
			))}
		</Switch>
	)
}

export default RoutesMap
