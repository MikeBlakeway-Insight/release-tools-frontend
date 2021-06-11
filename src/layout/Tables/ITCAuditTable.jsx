import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

export const ITCAuditTable = ({ rows }) => {
	return rows.map(row => (
		<Table.Row textAlign='center' key={row.issue}>
			<Table.Cell collapsing textAlign='left'>
				{row.issue}
			</Table.Cell>

			<Table.Cell collapsing>
				{row.linkedIssues.length != 0
					? row.linkedIssues.map(ticket => (
							<span key={ticket} style={{ display: 'block' }}>
								{ticket}
							</span>
					  ))
					: 'None'}
			</Table.Cell>
			<Table.Cell collapsing>
				{row.labels.map(label => (
					<span key={label} style={{ display: 'block' }}>
						{label}
					</span>
				))}
			</Table.Cell>
			<Table.Cell
				collapsing
				warning={row.status !== 'Done'}
				positive={row.status === 'Done'}
				error={row.status === ''}
			>
				{row.status === 'Done' ? <strong>Done</strong> : row.status}
			</Table.Cell>
			<Table.Cell positive={row.inProduction} error={!row.inProduction} collapsing>
				<Icon name={row.inProduction ? 'check' : 'close'} />
			</Table.Cell>
			<Table.Cell collapsing>{row.releaseDate}</Table.Cell>
			<Table.Cell collapsing>{row.fixVersion}</Table.Cell>
			<Table.Cell
				positive={row.sdlcCabTicket !== ''}
				error={row.sdlcCabTicket === ''}
				collapsing
			>
				<Icon name={row.sdlcCabTicket !== '' ? 'check' : 'close'} />
			</Table.Cell>
			<Table.Cell error={row.sdlcCabTicket === ''} collapsing>
				{row.sdlcCabTicket === '' ? <Icon name='close' /> : row.sdlcCabTicket}
			</Table.Cell>

			<Table.Cell
				positive={!row.sdlcTechnicalOwner === ''}
				error={row.sdlcTechnicalOwner === ''}
				collapsing
			>
				{row.sdlcTechnicalOwner !== '' ? (
					row.sdlcTechnicalOwner
				) : (
					<strong>UNASSIGNED</strong>
				)}
			</Table.Cell>
			<Table.Cell collapsing>{row.sdlcTester}</Table.Cell>

			<Table.Cell
				collapsing
				warning={row.resolution === 'In Progress'}
				positive={row.resolution === 'Done'}
				error={row.resolution === 'Unassigned'}
			>
				{row.resolution}
			</Table.Cell>
		</Table.Row>
	))
}

export default ITCAuditTable
