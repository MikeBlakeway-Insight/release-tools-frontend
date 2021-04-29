import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Placeholder } from 'semantic-ui-react'

import { tables_config } from './config/tables_config'
import { api_config } from './config/api_config'

import ConfigBar from './ConfigBar'
import AuditTable from './AuditTable'
import { performWebAudit } from './api/performWebAudit'

export const WKTLOReleaseAudit = () => {
	const dispatch = useDispatch()

	const fixVersion = useSelector(state => state.webAudit.fixVersion)
	const refresh = useSelector(state => state.webAudit.refresh)
	const loading = useSelector(state => state.webAudit.loading)
	const auditData = useSelector(state => state.webAudit.auditData)

	const {
		wktlo: { expanded_headers, headers },
	} = tables_config

	const configBarUrl = `${api_config.versions.url}WKTLO`
	const auditEndpoint = `${api_config.webAudit.url}?jql=fixVersion=${fixVersion}&refresh=${refresh}`

	useEffect(() => {
		fixVersion && performWebAudit(auditEndpoint, dispatch)
	}, [fixVersion])

	return (
		<>
			<Grid.Row>
				<Grid.Column>
					<ConfigBar endpoint={configBarUrl} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					{loading ? (
						<Placeholder>
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder>
					) : (
						<AuditTable
							rows={auditData}
							expanded_headers={expanded_headers}
							headers={headers}
						/>
					)}
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default WKTLOReleaseAudit
