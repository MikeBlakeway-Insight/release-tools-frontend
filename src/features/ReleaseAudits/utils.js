import React from 'react'
import { WebAuditTable, ITCAuditTable } from '../../layout/Tables'
import { API_CONSTANTS } from '../../constants/api'
import { TABLES_CONFIG } from '../../constants/tables'

const { audits: AUDITS, versions: VERSIONS } = API_CONSTANTS
const { wktlo, itc } = TABLES_CONFIG

const selectAuditEndpoint = project => {
	switch (project) {
		case 'ITC':
			return AUDITS.itcAudit.url

		default:
			return AUDITS.webAudit.url
	}
}

export const createVersionEndpoint = (project, version) =>
	`${VERSIONS.url}${project.active}?showReleased=${version.showReleased}`

export const createAuditEndpoint = (project, version) => {
	const endpoint = selectAuditEndpoint(project.active)
	return `${endpoint}?jql=fixVersion=${version.active}&refresh=${version.refresh}`
}

export const createTableBody = (rows, expanded_headers, project) => {
	return project !== 'ITC' ? (
		<WebAuditTable rows={rows} expanded_headers={expanded_headers} />
	) : (
		<ITCAuditTable rows={rows} />
	)
}

export const createTableHeaders = project => {
	switch (project) {
		case 'ITC':
			return itc

		default:
			return wktlo
	}
}
