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

import { PageNotFound, HoldingPage, HomePage } from '../pages'

export const routesConfig = [
	{
		path: '/',
		component: HomePage,
		title: 'SDLC Release Tool',
		subTitle: 'Welcome to the SDLC release tool dashboard',
		exact: true,
	},
	{
		path: '*',
		component: PageNotFound,
	},
]
