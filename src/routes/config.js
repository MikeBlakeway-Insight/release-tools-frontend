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

import { HomePage, PageNotFound } from '../pages'
import { ReleaseAudit } from '../features/ReleaseAudit'

export const routesConfig = [
	{
		path: '/release-audits',
		component: ReleaseAudit,
		title: 'Release Audit Tool',
		subTitle: 'Select which project you would like to audit',
	},
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
