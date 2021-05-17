import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const ShowHiddenRow = ({ showHiddenRow, data, id }) => (
	<Table.Cell>
		<Button
			basic
			size='mini'
			disabled={data.length === 0}
			primary
			row_id={id}
			onClick={showHiddenRow}
		>
			View
		</Button>
	</Table.Cell>
)

export default ShowHiddenRow
