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
 * way you'd do inside a `<Switch>`
 */

import Pages from '../pages'

export const routesConfig = [
	{
		path: '/',
		component: Pages.DemoDashboard,
		exact: true,
	},
	{
		path: '/audit-reports',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/wktlo-release-audit',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/wktlo-sprint-audit',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/gna-release-audit',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/itc-release-audit',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/confluence',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/document-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/insight-itc',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-itc-audit-data',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-process-time-data',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-production-error-data',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-velocity-data',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/perform-itc-audit',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/insight-value-stream',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/calculate-cycle-time-report',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-cycle-time-data',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/duration-report',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/status-change-report',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/insight-web-emea',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-velocity-data-by-sprint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-web-audit-data',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/perform-web-audit',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/insight-web-na',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-velocity-gna',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-velocity-rwm',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-velocity-sd',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/gna-status-change-report',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/velocity-by-ticket',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/insight-web-tiger',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/collect-tiger-ticket-duration',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/jira',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/boards-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/change-log-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/issue-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/jql-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/projects-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/remote-links-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/sprint-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/sprints-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/status-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/user-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/versions-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/metrics',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/process-time-api',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/phabricator',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/phid-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/revisions-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
	{
		path: '/user-endpoint',
		component: Pages.DemoSubRouteDashboard,
		exact: true,
	},
]
