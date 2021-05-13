export const API_CONSTANTS = {
	projects: {
		url: '/api/v1/jira/projects',
		allowed: ['ICARE', 'ITC', 'GNA', 'WKTLO'],
	},
	versions: {
		url: '/api/v1/jira/versions/',
	},
	audits: {
		webAudit: {
			url: '/api/v1/insight/web/audit/web',
		},
		itcAudit: {
			url: '/api/v1/insight/itc/audit/web',
		},
	},
	cycle_time: {
		url: 'api/v1/insight/valuestream/cycletime/report',
		allowed: ['ICARE', 'ITC', 'GNA', 'WKTLO'],
	},
}
