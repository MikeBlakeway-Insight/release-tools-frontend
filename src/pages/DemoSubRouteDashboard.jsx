import React from 'react'
import { Grid, Statistic } from 'semantic-ui-react'

import Widget from '../widgets'
import { Panel } from '../layout/common'

export const DemoSubRouteDashboard = () => {
	return (
		<>
			<Grid.Row>
				<Panel title='Status List' headerElement='h5'>
					<Widget.List.StatusList />
				</Panel>
				<Panel title='Single Statistic' headerElement='h5'>
					<Statistic label='Issues in Backlog' value='16,482' />
				</Panel>
				<Panel title='Single Statistic' headerElement='h5'>
					<Statistic label='Issues in Completed' value='9,887' />
				</Panel>
			</Grid.Row>
		</>
	)
}

export default DemoSubRouteDashboard
