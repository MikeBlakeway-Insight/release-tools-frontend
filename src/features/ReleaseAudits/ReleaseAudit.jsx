import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Placeholder } from 'semantic-ui-react'

import AuditTable from './AuditTable'
import ConfigBar from '../ConfigBar/ConfigBar'

import { updateData } from '../redux/auditSlice'
import { getAuditData, getFixVersions, getProjects } from '../../services'
import {
	createVersionEndpoint,
	createAuditEndpoint,
	createTableHeaders,
} from './utils'

export const ReleaseAudit = () => {
	const dispatch = useDispatch()

	// retrieving state from redux
	const { audit, project, version } = useSelector(state => state)

	const versionEndpoint = createVersionEndpoint(project, version)
	const auditEndpoint = createAuditEndpoint(project, version)

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
						audit?.data && (
							<AuditTable
								rows={audit.data}
								table_headers={createTableHeaders(project.active)}
							/>
						)
					)}
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default ReleaseAudit
