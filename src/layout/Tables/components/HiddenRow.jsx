import React from 'react'
import { List, Table, Icon } from 'semantic-ui-react'

export const HiddenRow = ({ headers, row_id, row, activeRow }) => {
	const styles = {
		display: activeRow === row_id ? 'table-cell' : 'none',
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
									<Table.HeaderCell key={cell}>{cell.toUpperCase()}</Table.HeaderCell>
								))}
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{row.map(cell => (
								<Table.Row key={cell.id} textAlign='center'>
									<Table.Cell>{cell.id}</Table.Cell>
									<Table.Cell>{cell.title}</Table.Cell>
									<Table.Cell>{cell.link}</Table.Cell>
									<Table.Cell>{cell.status}</Table.Cell>
									<Table.Cell>
										{cell.closed ? <Icon name='check' /> : <Icon name='close' />}
									</Table.Cell>
									<Table.Cell>{cell.author}</Table.Cell>
									<Table.Cell>{cell.reviewer}</Table.Cell>
									<Table.Cell>
										<List
											size='tiny'
											items={cell.codeReviewers.map(({ name }) => name)}
										/>
									</Table.Cell>
									<Table.Cell>
										<a rel='noreferrer' target='_blank' href={cell.repository.link}>
											{cell.repository.name}
										</a>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</Table.Cell>
			</Table.Row>
		)
	)
}

export default HiddenRow
