import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Grid } from 'semantic-ui-react'

import { tables_config } from '../../constants/tables_config'
import { api_config } from '../../constants/api_config'

import { WebReleaseAuditTable, ReportConfigBar } from '../../components'
import { performWebAudit } from '../../api'

export const WKTLOReleaseAudit = () => {
	const dispatch = useDispatch()

	const [fixVersion, setFixVersion] = useState('')
	const [auditData, updateAuditData] = useState([])
	const [refresh, setRefresh] = useState(Boolean)

	const {
		wktlo: { expanded_headers, headers },
	} = tables_config
	const versionsEndpoint = `${api_config.versions.url}WKTLO`
	const auditEndpoint = `${api_config.webAudit.url}?jql=fixVersion=${fixVersion}&refresh=${refresh}`

	useEffect(() => {
		fixVersion && performWebAudit(updateAuditData, auditEndpoint, dispatch)
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
						<WebReleaseAuditTable
							expanded_headers={expanded_headers}
							headers={headers}
							rows={auditData}
						/>
					)}
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default WKTLOReleaseAudit
