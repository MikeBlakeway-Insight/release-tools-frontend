import React, { useState } from 'react'
import ExpandedRow from './ExpandedRow'
import MainRow from './MainRow'

const ExpandingTableRows = ({ rows, expanded_headers }) => {
	const [visibleRow, changeVisibleRow] = useState('')

	const changeRowVisibility = (e, data) => {
		const { row_id } = data
		row_id != visibleRow ? changeVisibleRow(row_id) : changeVisibleRow('')
	}
	return rows.map(row => (
		<>
			<MainRow row={row} changeRowVisibility={changeRowVisibility} />
			<ExpandedRow
				headers={expanded_headers}
				row={row.codeReviews}
				row_id={row.issue}
				visibleRow={visibleRow}
			/>
		</>
	))
}

export default ExpandingTableRows
