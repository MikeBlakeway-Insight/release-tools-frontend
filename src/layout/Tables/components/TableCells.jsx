import React from 'react'
import { Icon, Table } from 'semantic-ui-react'
import * as Atlas from './AtlasianIcons'

const Type = ({ type }) => {
	switch (type) {
		case 'Bug':
			return (
				<Table.Cell collapsing>
					<Atlas.Bug label={type} />
				</Table.Cell>
			)
		case 'Task':
			return (
				<Table.Cell collapsing>
					<Atlas.Task label={type} />
				</Table.Cell>
			)
		case 'Story':
			return (
				<Table.Cell collapsing>
					<Atlas.Story label={type} />
				</Table.Cell>
			)
		case 'Issue':
			return (
				<Table.Cell collapsing>
					<Atlas.Issue label={type} />
				</Table.Cell>
			)

		default:
			return <Table.Cell collapsing>{type}</Table.Cell>
	}
}

const Issue = ({ issue }) => (
	<Table.Cell collapsing textAlign='left'>
		{issue}
	</Table.Cell>
)

const Developer = ({ developer }) => (
	<Table.Cell collapsing>{developer}</Table.Cell>
)

const Summary = ({ summary }) => (
	<Table.Cell collapsing textAlign='left'>
		{summary}
	</Table.Cell>
)

const Tickets = ({ itcTickets }) => (
	<Table.Cell collapsing>
		{itcTickets.length != 0
			? itcTickets.map(ticket => (
					<span key={ticket} style={{ display: 'block' }}>
						{ticket}
					</span>
			  ))
			: 'None'}
	</Table.Cell>
)

const Labels = ({ labels }) => (
	<Table.Cell collapsing>
		{labels.map(label => (
			<span key={label} style={{ display: 'block' }}>
				{label}
			</span>
		))}
	</Table.Cell>
)

const DesignRequired = ({ requiresDesign, type }) =>
	type === 'Bug' || type === 'Task' ? (
		<Table.Cell collapsing>
			<Icon disabled name='minus' />
		</Table.Cell>
	) : requiresDesign ? (
		<Table.Cell positive collapsing>
			<Icon name='check' />
		</Table.Cell>
	) : (
		<Table.Cell error collapsing>
			<Icon name='close' />
		</Table.Cell>
	)

const DesignComplete = ({ designComplete, type }) =>
	type === 'Bug' || type === 'Task' ? (
		<Table.Cell collapsing>
			<Icon disabled name='minus' />
		</Table.Cell>
	) : designComplete ? (
		<Table.Cell positive collapsing>
			<Icon name='check' />
		</Table.Cell>
	) : (
		<Table.Cell error collapsing>
			<Icon name='close' />
		</Table.Cell>
	)

const DesignReviewed = ({ designReviewed, type }) =>
	type === 'Bug' || type === 'Task' ? (
		<Table.Cell collapsing>
			<Icon disabled name='minus' />
		</Table.Cell>
	) : designReviewed ? (
		<Table.Cell positive collapsing>
			<Icon name='check' />
		</Table.Cell>
	) : (
		<Table.Cell error collapsing>
			<Icon name='close' />
		</Table.Cell>
	)

const RequiresCode = ({ requiresCode, type }) =>
	type === 'Task' ? (
		<Table.Cell collapsing>
			<Icon disabled name='minus' />
		</Table.Cell>
	) : requiresCode ? (
		<Table.Cell positive collapsing>
			<Icon name='check' />
		</Table.Cell>
	) : (
		<Table.Cell error collapsing>
			<Icon name='close' />
		</Table.Cell>
	)

const CodeCommitted = ({ codeCommitted, type }) =>
	type === 'Task' ? (
		<Table.Cell collapsing>
			<Icon disabled name='minus' />
		</Table.Cell>
	) : codeCommitted ? (
		<Table.Cell positive collapsing>
			<Icon name='check' />
		</Table.Cell>
	) : (
		<Table.Cell error collapsing>
			<Icon name='close' />
		</Table.Cell>
	)

const DesignReviewedBy = ({ designReviewedBy, type }) =>
	type === 'Bug' || type === 'Task' ? (
		<Table.Cell collapsing>
			<Icon disabled name='minus' />
		</Table.Cell>
	) : (
		<Table.Cell>{designReviewedBy}</Table.Cell>
	)

const Status = ({ status }) => (
	<Table.Cell
		collapsing
		warning={status === 'In Progress'}
		positive={status === 'Done'}
		error={status === 'Unassigned'}
	>
		{status}
	</Table.Cell>
)

const TableCell = {
	CodeCommitted,
	DesignComplete,
	DesignRequired,
	DesignReviewed,
	DesignReviewedBy,
	Developer,
	Issue,
	Labels,
	RequiresCode,
	Status,
	Summary,
	Tickets,
	Type,
}

export default TableCell
