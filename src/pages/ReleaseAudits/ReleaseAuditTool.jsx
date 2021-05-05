import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Placeholder } from 'semantic-ui-react'

import { getAuditData } from './api/getAuditData'
import { tables_config } from './config/tables_config'
import { api_config } from './config/api_config'

import ConfigBar from './ConfigBar'
import AuditTable from './AuditTable'

export const ReleaseAuditTool = () => {
	const dispatch = useDispatch()
	const { fixVersions, config, audit } = useSelector(
		state => state.releaseAudits
	)

	const {
		wktlo: { expanded_headers, headers },
	} = tables_config

	const configBarUrl = `${api_config.versions.url}WKTLO`
	const auditEndpoint = `${api_config.webAudit.url}?jql=fixVersion=${fixVersions.selected}&refresh=${config.refresh}`

	useEffect(() => {
		fixVersions?.selected && getAuditData(auditEndpoint, dispatch)
	}, [fixVersions.selected])

	return (
		<>
			<Grid.Row>
				<Grid.Column>
					<ConfigBar endpoint={configBarUrl} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
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
