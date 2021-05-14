export const endpointsList = [
	{
		header: 'Confluence',
		subRoutes: [
			{
				name: 'Document Endpoint',
				path: '/document-endpoint',
			},
		],
	},

	{
		header: 'Insight - ITC',
		subRoutes: [
			{
				name: 'Collect ITC Audit Data',
				path: '/collect-itc-audit-data',
			},
			{
				name: 'Collect Process Time Data',
				path: '/collect-process-time-data',
			},
			{
				name: 'Collect Production Error Data',
				path: '/collect-production-error-data',
			},
			{
				name: 'Collect Velocity Data',
				path: '/collect-velocity-data',
			},
			{
				name: 'Perform ITC Audit',
				path: '/perform-itc-audit',
			},
		],
	},

	{
		header: 'Insight - Value Stream',
		subRoutes: [
			{
				name: 'Calculate Cycle Time Report',
				path: '/calculate-cycle-time-report',
			},
			{
				name: 'Collect Cycle Time Data',
				path: '/collect-cycle-time-data',
			},
			{
				name: 'Duration Report',
				path: '/duration-report',
			},
			{
				name: 'Status Change Report',
				path: '/status-change-report',
			},
		],
	},

	{
		header: 'Insight - Web EMEA',
		subRoutes: [
			{
				name: 'Collect Velocity Data By Sprint',
				path: '/collect-velocity-data-by-sprint',
			},
			{
				name: 'Collect Web Audit Data',
				path: '/collect-web-audit-data',
			},
			{
				name: 'Perform Web Audit',
				path: '/perform-web-audit',
			},
		],
	},

	{
		header: 'Insight - Web NA',
		subRoutes: [
			{
				name: 'Collect Velocity GNA',
				path: '/collect-velocity-gna',
			},
			{
				name: 'Collect Velocity RWM',
				path: '/collect-velocity-rwm',
			},
			{
				name: 'Collect Velocity SD',
				path: '/collect-velocity-sd',
			},
			{
				name: 'GNA Status Change Report',
				path: '/gna-status-change-report',
			},
			{
				name: 'Velocity By Ticket',
				path: '/velocity-by-ticket',
			},
		],
	},
	{
		header: 'Insight - Web Tiger',
		subRoutes: [
			{
				name: 'Collect Tiger Ticket Duration',
				path: '/collect-tiger-ticket-duration',
			},
		],
	},
	{
		header: 'Jira',
		subRoutes: [
			{
				name: 'Boards Endpoint',
				path: '/boards-endpoint',
			},
			{
				name: 'Change Log Endpoint',
				path: '/change-log-endpoint',
			},
			{
				name: 'Issue Endpoint',
				path: '/issue-endpoint',
			},
			{
				name: 'JQL Endpoint',
				path: '/jql-endpoint',
			},
			{
				name: 'Projects Endpoint',
				path: '/projects-endpoint',
			},
			{
				name: 'Remote Links Endpoint',
				path: '/remote-links-endpoint',
			},
			{
				name: 'Sprint Endpoint',
				path: '/sprint-endpoint',
			},
			{
				name: 'Sprints Endpoint',
				path: '/sprints-endpoint',
			},
			{
				name: 'Status Endpoint',
				path: '/status-endpoint',
			},
			{
				name: 'User Endpoint',
				path: '/user-endpoint',
			},
			{
				name: 'Versions Endpoint',
				path: '/versions-endpoint',
			},
		],
	},
	{
		header: 'Metrics',
		subRoutes: [
			{
				name: 'Process Time Api',
				path: '/process-time-api',
			},
		],
	},
	{
		header: 'Phabricator',
		subRoutes: [
			{
				name: 'Phid Endpoint',
				path: '/phid-endpoint',
			},
			{
				name: 'Revisions Endpoint',
				path: '/revisions-endpoint',
			},
			{
				name: 'User Endpoint',
				path: '/user-endpoint',
			},
		],
	},
]

export const reportsList = [
	{
		header: 'Tools',
		subRoutes: [
			{
				name: 'Release Audits',
				path: '/release-audits',
			},
		],
	},
]
