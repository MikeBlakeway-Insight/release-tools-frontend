import React, { useState } from 'react'
import { Icon, Table, Placeholder, Button } from 'semantic-ui-react'
import TableHeaders from './TableHeaders'
import ExpandedRow from './ExpandedRow'

export const ExpandingRowsTable = ({
	headers,
	expanded_headers,
	rows,
	isLoading,
}) => {
	const [visibleRow, changeVisibleRow] = useState('')

	const changeRowVisibility = (e, data) => {
		const { row_id } = data
		row_id != visibleRow ? changeVisibleRow(row_id) : changeVisibleRow('')
	}
	const createTableRows = () =>
		rows.map((row, i) => (
			<TableRow
				key={`row_${i}`}
				row={row}
				expanded_headers={expanded_headers}
				changeRowVisibility={changeRowVisibility}
				visibleRow={visibleRow}
			/>
		))
	return isLoading ? (
		<Placeholder>
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder>
	) : (
		<Table color='pink' size='small' celled selectable>
			<TableHeaders headers={headers} />
			<Table.Body>{createTableRows()}</Table.Body>
		</Table>
	)
}

const TableRow = ({
	row,
	expanded_headers,
	changeRowVisibility,
	visibleRow,
}) => {
	return (
		<>
			<Table.Row textAlign='center'>
				<Table.Cell collapsing textAlign='left'>
					{row.issue}
				</Table.Cell>
				<Table.Cell textAlign='left'>{row.summary}</Table.Cell>
				<Table.Cell collapsing>
					{row.itcTickets.length != 0
						? row.itcTickets.map(ticket => (
								<span key={ticket} style={{ display: 'block' }}>
									{ticket}
								</span>
						  ))
						: 'None'}
				</Table.Cell>
				<Table.Cell collapsing>{row.type}</Table.Cell>
				<Table.Cell collapsing>
					{row.labels.map(label => (
						<span key={label} style={{ display: 'block' }}>
							{label}
						</span>
					))}
				</Table.Cell>
				<Table.Cell
					collapsing
					warning={row.status === 'In Progress'}
					positive={row.status === 'Done'}
					error={row.status === 'Unassigned'}
				>
					{row.status}
				</Table.Cell>
				<Table.Cell collapsing>{row.developer}</Table.Cell>
				{row.requiresDesign ? (
					<Table.Cell positive collapsing>
						<Icon name='check' />
					</Table.Cell>
				) : (
					<Table.Cell error collapsing>
						<Icon name='close' />
					</Table.Cell>
				)}
				{row.designComplete ? (
					<Table.Cell positive collapsing>
						<Icon name='check' />
					</Table.Cell>
				) : (
					<Table.Cell error collapsing>
						<Icon name='close' />
					</Table.Cell>
				)}
				{row.designReviewed ? (
					<Table.Cell positive collapsing>
						<Icon name='check' />
					</Table.Cell>
				) : (
					<Table.Cell error collapsing>
						<Icon name='close' />
					</Table.Cell>
				)}
				<Table.Cell>{row.designReviewedBy}</Table.Cell>
				{row.requiresCode ? (
					<Table.Cell positive collapsing>
						<Icon name='check' />
					</Table.Cell>
				) : (
					<Table.Cell error collapsing>
						<Icon name='close' />
					</Table.Cell>
				)}
				{row.codeCommitted ? (
					<Table.Cell positive collapsing>
						<Icon name='check' />
					</Table.Cell>
				) : (
					<Table.Cell error collapsing>
						<Icon name='close' />
					</Table.Cell>
				)}
				<Table.Cell>
					<Button
						basic
						size='mini'
						// pass "&& true" to force a boolean result and prevent invalid props error
						disabled={row.codeReviews.length === 0}
						primary={row.codeReviews.length > 0}
						row_id={row.issue}
						onClick={changeRowVisibility}
					>
						View
					</Button>
				</Table.Cell>
			</Table.Row>
			<ExpandedRow
				headers={expanded_headers}
				row={row.codeReviews}
				row_id={row.issue}
				visibleRow={visibleRow}
			/>
		</>
	)
}
export default ExpandingRowsTable
