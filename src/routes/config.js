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

import { ReleaseAuditsDashboard, HomePage, PageNotFound } from '../pages'
import { ReleaseAuditTool } from '../features/ReleaseAudits/ReleaseAuditTool'

export const routesConfig = [
	{
		path: '/audit-reports',
		component: ReleaseAuditsDashboard,
		title: 'Audit Reports Dashboard',
		subTitle: 'Select which report you would like to run',
	},
	{
		path: '/wktlo-release-audit',
		component: ReleaseAuditTool,
		title: 'WKTLO Release Audit',
		subTitle: 'Select which release you would like to audit',
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
