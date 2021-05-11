import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Placeholder } from 'semantic-ui-react'

import { getAuditData } from '../../services/getAuditData'
import { TABLES_CONFIG } from '../../constants/tables'
import { API_CONSTANTS } from '../../constants/api'

import ConfigBar from './ConfigBar'
import AuditTable from './AuditTable'

export const ReleaseAuditTool = () => {
	const dispatch = useDispatch()

	const { audit, version } = useSelector(state => state)

	const {
		wktlo: { expanded_headers, headers },
	} = TABLES_CONFIG

	const configBarUrl = `${API_CONSTANTS.versions.url}WKTLO`
	const auditEndpoint = `${API_CONSTANTS.webAudit.url}?jql=fixVersion=${version.active}&refresh=${version.refresh}`

	useEffect(() => {
		version?.active && getAuditData(auditEndpoint, dispatch)
	}, [version.active])

	return (
		<>
			<Grid.Row data-testid='configbar-container'>
				<Grid.Column>
					<ConfigBar endpoint={configBarUrl} />
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
						<AuditTable
							rows={audit.data}
							expanded_headers={expanded_headers}
							headers={headers}
						/>
					)}
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default ReleaseAuditTool
