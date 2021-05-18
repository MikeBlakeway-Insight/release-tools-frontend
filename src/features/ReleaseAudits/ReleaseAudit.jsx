import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Placeholder, Table } from 'semantic-ui-react'

import ConfigBar from '../ConfigBar/ConfigBar'
import { TableHeaders } from '../../layout/Tables'

import { updateData } from '../../redux/auditSlice'
import { getAuditData, getFixVersions, getProjects } from '../../services'
import utils from './utils'

export const ReleaseAudit = () => {
	const dispatch = useDispatch()

	// retrieving state from redux
	const { audit, project, version } = useSelector(state => state)

	const versionEndpoint = utils.createVersionEndpoint(project, version)
	const auditEndpoint = utils.createAuditEndpoint(project, version)
	const { headers, expanded_headers } = utils.createTableHeaders(project.active)

	// retrieve/update project data on initial render
	useEffect(() => {
		getProjects(dispatch)
	}, [])

	// only retrieve version data when a project has been selected/changed
	// or if showReleased slider has been toggled
	useEffect(() => {
		project.active && getFixVersions(versionEndpoint, dispatch)
	}, [version.showReleased, project.active])

	// only retrieve audit data when a version has been selected/changed
	useEffect(() => {
		version?.active && getAuditData(auditEndpoint, dispatch)
	}, [version.active])

	return (
		<>
			<Grid.Row data-testid='configbar-container'>
				<Grid.Column>
					<ConfigBar resetHandler={updateData} />
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
						audit.data &&
						version.active && (
							<Table color='pink' size='small' celled selectable>
								<Table.Header>
									<TableHeaders headers={headers} />
								</Table.Header>
								<Table.Body>
									{utils.createTableBody(audit.data, expanded_headers, project.active)}
								</Table.Body>
							</Table>
						)
					)}
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default ReleaseAudit
