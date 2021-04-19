import React from 'react'
import { Grid } from 'semantic-ui-react'

import { ReportConfigBar, StructuredTable } from './components'

import { webAuditReportLines } from '../../data/webAuditRelease-response.json'
import { ReleaseAuditconfig } from './config/tables.config'

export const WKTLOReleaseAudit = () => {
	const releases = [
		{
			text: '2021-April.1',
			value: '2021-April.1',
		},
		{
			text: 'DM Test Cycle 2',
			value: 'DM Test Cycle 2',
		},
	]

	return (
		<>
			<Grid.Row>
				<Grid.Column>
					<ReportConfigBar options={releases} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<StructuredTable
						headers={ReleaseAuditconfig.headers}
						data={webAuditReportLines}
					/>
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default WKTLOReleaseAudit
