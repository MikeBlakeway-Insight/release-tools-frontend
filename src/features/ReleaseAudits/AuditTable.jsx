import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'semantic-ui-react'

import { ExpandingTable, TableHeaders, ITCRows } from '../../layout/Tables'

export const AuditTable = ({ tableHeaders, rows }) => {
	const { project, version } = useSelector(state => state)

	const { headers, expanded_headers } = tableHeaders
	// checking we have rows before rendering
	return (
		version?.active && (
			<Table color='pink' size='small' celled selectable>
				<Table.Header>
					<TableHeaders headers={headers} />
				</Table.Header>
				<Table.Body>
					{getTableBody(rows, expanded_headers, project.active)}
				</Table.Body>
			</Table>
		)
	)
}

const getTableBody = (rows, expanded_headers, project) => {
	return project !== 'ITC' ? (
		<ExpandingTable rows={rows} expanded_headers={expanded_headers} />
	) : (
		<ITCRows rows={rows} />
	)
}

export default AuditTable
