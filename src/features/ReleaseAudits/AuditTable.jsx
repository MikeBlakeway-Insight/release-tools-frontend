import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { createTableBody, createTableHeaders } from './utils'
import { TableHeaders } from '../../layout/Tables'

export const AuditTable = ({ rows }) => {
	const { project, version } = useSelector(state => state)
	const { headers, expanded_headers } = createTableHeaders(project.active)

	return (
		// checking we have rows before rendering
		version.active && (
			<Table color='pink' size='small' celled selectable>
				<Table.Header>
					<TableHeaders headers={headers} />
				</Table.Header>
				<Table.Body>
					{createTableBody(rows, expanded_headers, project.active)}
				</Table.Body>
			</Table>
		)
	)
}

export default AuditTable
