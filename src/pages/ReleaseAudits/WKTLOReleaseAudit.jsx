import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'

import { webAuditReportLines } from '../../data/webAuditRelease-response.json'
import { ReportConfigBar, StructuredTable } from './components'
import { tables_config } from './config/tables_config'
import { api_config } from './config/api_config'

export const WKTLOReleaseAudit = () => {
	const endpoint = `${api_config.versions.url}WKTLO?showReleased=false`
	const [selectedRelease, changeSelectedRelease] = useState('')

	// retrieving the headers array from wktlo object
	const {
		wktlo: { headers },
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
					<StructuredTable
						selectedRelease={selectedRelease}
						headers={headers}
						data={webAuditReportLines}
					/>
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default WKTLOReleaseAudit
