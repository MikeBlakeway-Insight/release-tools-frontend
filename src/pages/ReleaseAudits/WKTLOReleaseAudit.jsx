import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { tables_config } from './config/tables_config'
import { webAuditReportLines } from '../../data/webAuditRelease-response.json'
import { ExpandingRowsTable, ReportConfigBar } from './components'

import { api_config } from './config/api_config'

export const WKTLOReleaseAudit = () => {
	const endpoint = `${api_config.versions.url}WKTLO?showReleased=false`
	const [selectedRelease, changeSelectedRelease] = useState('')

	const {
		wktlo: { expanded_headers, headers },
	} = tables_config

	return (
		<>
			<Grid.Row>
				<Grid.Column>
					<ReportConfigBar changeSelection={changeSelectedRelease} url={endpoint} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<ExpandingRowsTable
						expanded_headers={expanded_headers}
						headers={headers}
						rows={webAuditReportLines}
					/>
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default WKTLOReleaseAudit
