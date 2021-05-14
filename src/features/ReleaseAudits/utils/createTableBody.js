import React from 'react'
import { ExpandingTable, ITCRows } from '../../../layout/Tables'

export const createTableBody = (rows, expanded_headers, project) => {
	return project !== 'ITC' ? (
		<ExpandingTable rows={rows} expanded_headers={expanded_headers} />
	) : (
		<ITCRows rows={rows} />
	)
}
