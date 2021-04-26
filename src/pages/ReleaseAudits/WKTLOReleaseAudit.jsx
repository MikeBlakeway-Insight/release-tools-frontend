import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
<<<<<<< HEAD
import { tables_config } from './config/tables_config'
import { webAuditReportLines } from '../../data/webAuditRelease-response.json'
import { ExpandingRowsTable, ReportConfigBar } from './components'

=======

import { webAuditReportLines } from '../../data/webAuditRelease-response.json'
import { ReportConfigBar, StructuredTable } from './components'
import { tables_config } from './config/tables_config'
>>>>>>> cc989b39fdc6f3d2b5ca781a83c93175a5dc6057
import { api_config } from './config/api_config'

export const WKTLOReleaseAudit = () => {
	const endpoint = `${api_config.versions.url}WKTLO?showReleased=false`
	const [selectedRelease, changeSelectedRelease] = useState('')

<<<<<<< HEAD
=======
	// retrieving the headers array from wktlo object
>>>>>>> cc989b39fdc6f3d2b5ca781a83c93175a5dc6057
	const {
		wktlo: { expanded_headers, headers },
	} = tables_config

	return (
		<>
			<Grid.Row>
				<Grid.Column>
<<<<<<< HEAD
					<ReportConfigBar changeSelection={changeSelectedRelease} url={endpoint} />
=======
					<ReportConfigBar
						changeSelection={changeSelectedRelease}
						apiUrl={endpoint}
					/>
>>>>>>> cc989b39fdc6f3d2b5ca781a83c93175a5dc6057
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
<<<<<<< HEAD
					<ExpandingRowsTable
						expanded_headers={expanded_headers}
						headers={headers}
						rows={webAuditReportLines}
=======
					<StructuredTable
						selectedRelease={selectedRelease}
						headers={headers}
						data={webAuditReportLines}
>>>>>>> cc989b39fdc6f3d2b5ca781a83c93175a5dc6057
					/>
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default WKTLOReleaseAudit
