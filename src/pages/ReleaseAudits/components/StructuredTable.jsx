import React from 'react'
import { Icon, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const StructuredTable = ({ data, headers }) => {
	return (
		<Table color='blue' size='small' celled selectable>
			<HeaderRows headers={headers} />

			<Table.Body>
				{data.map((item, i) => (
					<Table.Row textAlign='center' key={`Row${i}`}>
						<Table.Cell textAlign='left'>{item.issue}</Table.Cell>
						<Table.Cell textAlign='left'>{item.summary}</Table.Cell>
						<Table.Cell>
							{item.itcTickets.length != 0 ? item.itcTickets.length : 'None'}
						</Table.Cell>
						<Table.Cell collapsing>{item.type}</Table.Cell>
						<Table.Cell collapsing>
							{item.labels.map((label, i) => (
								<Table.Row
									textAlign='center'
									key={`Label${i}`}
									style={{ borderRight: 'none' }}
								>
									<Table.Cell>{label}</Table.Cell>
								</Table.Row>
							))}
						</Table.Cell>
						<Table.Cell collapsing>{item.status}</Table.Cell>
						<Table.Cell collapsing>{item.developer}</Table.Cell>
						<Table.Cell collapsing>
							{item.requiresDesign ? <Icon name='check' /> : <Icon name='close' />}
						</Table.Cell>
						<Table.Cell collapsing>
							{item.designComplete ? <Icon name='check' /> : <Icon name='close' />}
						</Table.Cell>
						<Table.Cell collapsing>
							{item.designReviewed ? <Icon name='check' /> : <Icon name='close' />}
						</Table.Cell>
						<Table.Cell>{item.designReviewedBy}</Table.Cell>
						<Table.Cell collapsing>
							{item.requiresCode ? <Icon name='check' /> : <Icon name='close' />}
						</Table.Cell>
						<Table.Cell collapsing>
							{item.codeCommitted ? <Icon name='check' /> : <Icon name='close' />}
						</Table.Cell>
						<Table.Cell>
							{item.codeReviews.map((review, i) => (
								<Table.Row
									textAlign='left'
									key={`Code${i}`}
									style={{ borderRight: 'none' }}
								>
									<Table.Cell>
										<Link to={review.link}>{review.title}</Link>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	)
}

/** getSubHeaders
 * retrieves all subheaders from each header
 * object and returns them as a new array
 * called subheaders
 */
const getSubHeaders = headers => {
	const subheadersArray = []
	headers.map(header => {
		let cols = header.subheaders
		subheadersArray.push(...cols)
	})
	return subheadersArray
}

const HeaderRows = ({ headers }) => {
	const Headers = headers.map((header, i) => (
		<Table.HeaderCell key={i} colSpan={header.subheaders.length}>
			{header.title}
		</Table.HeaderCell>
	))

	const Subheaders = getSubHeaders(headers).map((subheader, i) => (
		<Table.HeaderCell key={i}>{subheader}</Table.HeaderCell>
	))

	return (
		<Table.Header>
			<Table.Row textAlign='center'>{Headers}</Table.Row>
			<Table.Row textAlign='center' style={{ fontSize: '.75rem' }}>
				{Subheaders}
			</Table.Row>
		</Table.Header>
	)
}

export default StructuredTable
