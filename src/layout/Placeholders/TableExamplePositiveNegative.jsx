import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

export const TableExamplePositiveNegative = () => (
	<Table celled>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>Name</Table.HeaderCell>
				<Table.HeaderCell>Status</Table.HeaderCell>
				<Table.HeaderCell>Notes</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			<Table.Row warning>
				<Table.Cell>Teddy</Table.Cell>
				<Table.Cell>Unknown</Table.Cell>
				<Table.Cell>None</Table.Cell>
			</Table.Row>
			<Table.Row positive>
				<Table.Cell>Jimmy</Table.Cell>
				<Table.Cell>
					<Icon name='checkmark' />
					Available
				</Table.Cell>
				<Table.Cell>None</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Jamie</Table.Cell>
				<Table.Cell>Unknown</Table.Cell>
				<Table.Cell warning>Requires call</Table.Cell>
			</Table.Row>
			<Table.Row negative>
				<Table.Cell>Jill</Table.Cell>
				<Table.Cell>
					<Icon name='close' />
					Unavailable
				</Table.Cell>
				<Table.Cell>Annual Leave</Table.Cell>
			</Table.Row>
			<Table.Row positive>
				<Table.Cell>Bob</Table.Cell>
				<Table.Cell>
					<Icon name='checkmark' />
					Available
				</Table.Cell>
				<Table.Cell>None</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table>
)
