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
		path: '/exists-as-email',
		component: ReleaseAudit,
		title: 'existsAsEmail',
		subTitle:
			'check if loginId already exists as email and returns email existence indicator',
	},
	{
		path: '/exists-as-username',
		component: HomePage,
		title: 'existsAsUsername',
		subTitle: 'check if login id already exists as username',
	},
	{
		path: '/get-user-account',
		component: HomePage,
		title: 'getUserAccount',
		subTitle: 'user account info by UID',
	},
	{
		path: '/',
		component: HomePage,
		title: 'Users Controller Tool',
		subTitle: 'API to manipulate gigya accounts',
		exact: true,
	},
	{
		path: '*',
		component: PageNotFound,
	},
]
