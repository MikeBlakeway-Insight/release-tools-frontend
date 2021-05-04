import React from 'react'

import { Table } from 'semantic-ui-react'
import TableHeaders from '../../layout/Tables/TableHeaders'
import ExpandingTableRows from '../../layout/Tables/ExpandingTableRows'

export const AuditTable = ({ headers, expanded_headers, rows }) =>
	// checking we have rows before rendering
	rows.length > 0 && (
		<Table color='pink' size='small' celled selectable>
			<Table.Header>
				<TableHeaders headers={headers} />
			</Table.Header>
			<Table.Body>
				<ExpandingTableRows rows={rows} expanded_headers={expanded_headers} />
			</Table.Body>
		</Table>
	)

export default AuditTable
