export const api_config = {
	projects: {
		url: '/api/v1/jira/projects',
		allowed: ['ICARE', 'ITC', 'GNA', 'WKTLO'],
	},
	versions: {
		url: '/api/v1/jira/versions/',
	},
	webAudit: {
		url: '/api/v1/insight/web/audit/web',
	},
	itcAudit: {
		url: '/api/v1/insight/itc/audit/web',
	},
	dateOptions: {
		weekday: undefined,
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timezone: 'UTC',
	},
}
