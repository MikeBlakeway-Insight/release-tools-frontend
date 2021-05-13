import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

export const ITCRows = ({ rows }) => {
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
				warning={row.status === 'In Progress'}
				positive={row.status === 'Done'}
				error={row.status === 'Unassigned'}
			>
				{row.status}
			</Table.Cell>
			{row.inProduction ? (
				<Table.Cell positive collapsing>
					<Icon name='check' />
				</Table.Cell>
			) : (
				<Table.Cell error collapsing>
					<Icon name='close' />
				</Table.Cell>
			)}
			<Table.Cell collapsing>{row.releaseDate}</Table.Cell>
			<Table.Cell collapsing>{row.fixVersion}</Table.Cell>
			{row.sdlcCabTicket !== '' ? (
				<Table.Cell positive collapsing>
					<Icon name='check' />
				</Table.Cell>
			) : (
				<Table.Cell error collapsing>
					<Icon name='close' />
				</Table.Cell>
			)}
			<Table.Cell collapsing>{row.sdlcCabTicket}</Table.Cell>
			<Table.Cell collapsing>{row.sdlcTechnicalOwner}</Table.Cell>
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

export default ITCRows
