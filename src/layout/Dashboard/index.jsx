import React from 'react'
import { Grid } from 'semantic-ui-react'

/**
 * ==============
 * * -- Dashboard Component -- *
 *
 * Location:
 * src/layout/Dashboard/index.jsx
 *
 * Description
 * The Dashboard component displays rows of panels, each containing a widget. Widgets
 * can be grouped in rows, or can take up an entire row. The number of panels you add
 * to a row will determine the number of columns in that row.
 */
export const Dashboard = ({ children }) => {
	return (
		<Grid columns='equal' padded stackable>
			{children}
		</Grid>
	)
}

export default Dashboard
