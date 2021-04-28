import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'

import { tables_config } from '../../config/tables_config'

import { ExpandingRowsTable, ReportConfigBar } from '../../components'
import { api_config } from '../../config/api_config'
import { performWebAudit } from '../../api'

export const WKTLOReleaseAudit = () => {
	const [fixVersion, setFixVersion] = useState('')
	const [auditData, updateAuditData] = useState([])
	const [refresh, setRefresh] = useState(Boolean)
	const [isLoading, setIsLoading] = useState(false)

	const {
		wktlo: { expanded_headers, headers },
	} = tables_config
	const versionsEndpoint = `${api_config.versions.url}WKTLO`
	const auditEndpoint = `${api_config.webAudit.url}?jql=fixVersion=${fixVersion}&refresh=${refresh}`

	useEffect(() => {
		fixVersion && performWebAudit(updateAuditData, auditEndpoint, setIsLoading)
	}, [fixVersion])

	return (
		<>
			<Grid.Row>
				<Grid.Column>
					<ReportConfigBar
						setRefresh={setRefresh}
						endpoint={versionsEndpoint}
						setFixVersion={setFixVersion}
					/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					{fixVersion && (
						<ExpandingRowsTable
							expanded_headers={expanded_headers}
							headers={headers}
							rows={auditData}
							isLoading={isLoading}
						/>
					)}
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default WKTLOReleaseAudit
