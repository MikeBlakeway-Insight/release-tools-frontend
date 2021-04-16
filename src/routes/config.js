/**
 * ==============
 * * -- Router Config -- *
 *
 * Location:
 * src/routes.js
 *
 * Description
 * Our route config is just an array of logical "routes"
 * with `path` and `component` props, ordered the same
 * way you do inside a `<Switch>`
 */

import { PageNotFound, HomePage } from '../pages'

export const routesConfig = [
	{
		path: '/process-time-api',
		component: HomePage,
		title: 'Release Process Time Report',
		subTitle: 'Run a process time report',
	},

	{
		path: '/',
		component: HomePage,
		title: 'SDLC Release Toolt',
		subTitle: 'Welcome to the SDLC release tool dashboard',
		exact: true,
	},
	{
		path: '*',
		component: PageNotFound,
	},
]
