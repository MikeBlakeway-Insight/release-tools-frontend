import React from 'react'
import { Table } from 'semantic-ui-react'

export const TableHeaders = ({ headers }) => {
	const Subheaders = getSubHeaders(headers).map((subheader, i) => (
		<Table.HeaderCell key={i}>{subheader}</Table.HeaderCell>
	))
	const Headers = headers.map((header, i) => (
		<Table.HeaderCell key={i} colSpan={header.subheaders.length}>
			{header.title}
		</Table.HeaderCell>
	))

	return (
		<>
			<Table.Row textAlign='center'>{Headers}</Table.Row>

			<Table.Row textAlign='center' style={{ fontSize: '.75rem' }}>
				{Subheaders}
			</Table.Row>
		</>
	)
}

const getSubHeaders = headers => {
	const subheadersArray = []

	headers.map(header => {
		let cols = header.subheaders
		subheadersArray.push(...cols)
	})

	return subheadersArray
}

export default TableHeaders
