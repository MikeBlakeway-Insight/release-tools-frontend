import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'

export const ExpandedRow = ({ headers, row_id, row, visibleRow }) => {
	const styles = {
		display: visibleRow === row_id ? '' : 'none',
		backgroundColor: '#e6f1fd',
		width: '100%',
	}

	return (
		row.length > 0 && (
			<Table.Row key={row_id}>
				<Table.Cell style={styles} colSpan='100%'>
					<Table color='blue' size='small' celled selectable>
						<Table.Header>
							<Table.Row textAlign='center'>
								{headers.map(cell => (
									<Table.HeaderCell key={cell}>{cell}</Table.HeaderCell>
								))}
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{row.map(cell => (
								<Table.Row key={cell.id}>
									<Table.Cell>{cell.id}</Table.Cell>
									<Table.Cell>{cell.title}</Table.Cell>
									<Table.Cell>{cell.link}</Table.Cell>
									<Table.Cell>{cell.status}</Table.Cell>
									<Table.Cell>{cell.closed}</Table.Cell>
									<Table.Cell>{cell.author}</Table.Cell>
									<Table.Cell>{cell.celler}</Table.Cell>
									<Table.Cell>{cell.id}</Table.Cell>
									<Table.Cell>{cell.id}</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</Table.Cell>
			</Table.Row>
		)
	)
}

export default ExpandedRow
