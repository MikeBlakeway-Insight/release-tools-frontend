import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const ShowHiddenRow = ({ showHiddenRow, data, id }) => (
	<Table.Cell collapsing>
		{data?.length ? (
			<Button
				basic
				size='mini'
				disabled={!data.length}
				primary
				row_id={id}
				onClick={showHiddenRow}
			>
				{`View ${data.length} Differentials`}
			</Button>
		) : (
			<p></p>
		)}
	</Table.Cell>
)

export default ShowHiddenRow
