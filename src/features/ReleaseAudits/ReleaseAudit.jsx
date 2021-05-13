import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Placeholder } from 'semantic-ui-react'

import { getAuditData, getFixVersions, getProjects } from '../../services'
import { TABLES_CONFIG } from '../../constants/tables'
import { API_CONSTANTS } from '../../constants/api'

import ConfigBar from './ConfigBar'
import AuditTable from './AuditTable'

export const ReleaseAudit = () => {
	const dispatch = useDispatch()

	const { audit, project, version } = useSelector(state => state)

	const { wktlo, itc } = TABLES_CONFIG

	const getAuditEndpoint = project => {
		switch (project) {
			case 'ITC':
				return API_CONSTANTS.itcAudit.url

			default:
				return API_CONSTANTS.webAudit.url
		}
	}

	const getTableHeaders = project => {
		switch (project) {
			case 'ITC':
				return itc

			default:
				return wktlo
		}
	}

	const versionEndpoint = `${API_CONSTANTS.versions.url}${project.active}?showReleased=${version.showReleased}`
	const auditEndpoint = `${getAuditEndpoint(project.active)}?jql=fixVersion=${
		version.active
	}&refresh=${version.refresh}`

	useEffect(() => {
		version?.active && getAuditData(auditEndpoint, dispatch)
	}, [version.active])

	useEffect(() => {
		getProjects(dispatch)
	}, [])

	useEffect(() => {
		project.active !== '' && getFixVersions(versionEndpoint, dispatch)
	}, [version.showReleased, project.active])

	return (
		<>
			<Grid.Row data-testid='configbar-container'>
				<Grid.Column>
					<ConfigBar />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row data-testid='audit-table'>
				<Grid.Column>
					{audit.loading ? (
						<Placeholder>
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder>
					) : (
						audit?.data && (
							<AuditTable
								rows={audit.data}
								tableHeaders={getTableHeaders(project.active)}
							/>
						)
					)}
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default ReleaseAudit
