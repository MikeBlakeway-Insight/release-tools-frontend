import React from 'react'
import { Table } from 'semantic-ui-react'

export const TableHeaders = ({ headers }) => {
	const getSubHeaders = headers => {
		const subheadersArray = []
		headers.map(header => {
			let cols = header.subheaders
			subheadersArray.push(...cols)
		})
		return subheadersArray
	}

	const Subheaders = getSubHeaders(headers).map((subheader, i) => (
		<Table.HeaderCell key={i}>{subheader}</Table.HeaderCell>
	))

	return (
		<>
			<Table.Row textAlign='center'>
				{headers.map((header, i) => (
					<Table.HeaderCell key={i} colSpan={header.subheaders.length}>
						{header.title}
					</Table.HeaderCell>
				))}
			</Table.Row>

			<Table.Row textAlign='center' style={{ fontSize: '.75rem' }}>
				{Subheaders}
			</Table.Row>
		</>
	)
}

export default TableHeaders
