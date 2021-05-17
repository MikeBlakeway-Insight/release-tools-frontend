import React from 'react'
import { Table } from 'semantic-ui-react'
import TableCell from './TableCells'
import ShowHiddenRow from './ShowHiddenRow'

export const VisibleRow = ({ row, showHiddenRow }) => {
	return (
		<Table.Row textAlign='center'>
			<TableCell.Issue issue={row.issue} />
			<TableCell.Summary summary={row.summary} />
			<TableCell.Tickets itcTickets={row.itcTickets} />
			<TableCell.Type type={row.type} />
			<TableCell.Labels labels={row.labels} />
			<TableCell.Status status={row.status} />
			<TableCell.Developer developer={row.developer} />
			<TableCell.DesignRequired
				type={row.type}
				requiresDesign={row.requiresDesign}
			/>
			<TableCell.DesignComplete
				type={row.type}
				designComplete={row.designComplete}
			/>
			<TableCell.DesignReviewed
				type={row.type}
				designReviewed={row.designReviewed}
			/>
			<TableCell.DesignReviewedBy
				type={row.type}
				designReviewedBy={row.designReviewedBy}
			/>
			<TableCell.RequiresCode type={row.type} requiresCode={row.requiresCode} />
			<TableCell.CodeCommitted type={row.type} codeCommitted={row.codeCommitted} />

			<ShowHiddenRow
				showHiddenRow={showHiddenRow}
				data={row.codeReviews}
				id={row.issue}
			/>
		</Table.Row>
	)
}
