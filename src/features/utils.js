import React from 'react'
import { WebAuditTable, ITCAuditTable } from '../layout/Tables'
import { API_CONSTANTS } from '../constants/api'
import { TABLES_CONFIG } from '../constants/tables'

const { audits: AUDITS, versions: VERSIONS } = API_CONSTANTS
const { wktlo, itc } = TABLES_CONFIG

export const selectAuditEndpoint = project => {
	if (typeof project === 'string' || project instanceof String) {
		switch (project) {
			case 'ITC':
				return AUDITS.itcAudit.url

			case 'ICARE':
				return AUDITS.webAudit.url

			case 'GNA':
				return AUDITS.webAudit.url

			case 'WKTLO':
				return AUDITS.webAudit.url

			default:
				'WKTLO'
		}
	} else {
		throw Error('Project must be a string')
	}
}

export const utils = {
	createAuditEndpoint(project, version) {
		const endpoint = selectAuditEndpoint(project.active)
		return `${endpoint}?jql=fixVersion=${version.active}&refresh=${version.refresh}`
	},

	createVersionEndpoint(project, version) {
		return `${VERSIONS.url}${project.active}?showReleased=${version.showReleased}`
	},

	createTableBody(rows, expanded_headers, project) {
		return project !== 'ITC' ? (
			<WebAuditTable rows={rows} expanded_headers={expanded_headers} />
		) : (
			<ITCAuditTable rows={rows} />
		)
	},

	createTableHeaders(project) {
		switch (project) {
			case 'ITC':
				return itc

			default:
				return wktlo
		}
	},
}

// prevents eslint warning about not having a displayName
// not sure why this particular function feels it is so special
utils.createTableBody.displayName = 'createTableBody'

export default utils
