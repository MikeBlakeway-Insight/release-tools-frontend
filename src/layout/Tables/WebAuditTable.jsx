import React, { useState } from 'react'
import { HiddenRow, VisibleRow } from './components/web_audit_components'

export const WebAuditTable = ({ rows, expanded_headers }) => {
	const [activeRow, setActiveRow] = useState('')

	const showHiddenRow = (e, data) => {
		const { row_id } = data
		row_id != activeRow ? setActiveRow(row_id) : setActiveRow('')
	}

	return rows.map(row => (
		<>
			<VisibleRow row={row} showHiddenRow={showHiddenRow} />
			<HiddenRow
				headers={expanded_headers}
				row={row.codeReviews}
				row_id={row.issue}
				activeRow={activeRow}
			/>
		</>
	))
}

export default WebAuditTable
