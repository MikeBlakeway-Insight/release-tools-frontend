import React from 'react'
import { Grid, Statistic } from 'semantic-ui-react'

import Widget from '../widgets'
import { Panel } from '../layout/common'

export const DemoDashboard = () => {
	const groupedStatistics = [
		{
			key: 'time',
			label: 'Average Time',
			value: '57.6',
			icon: 'stopwatch',
		},
		{ key: 'saves', label: 'Saves', value: '3,112', icon: 'magnet' },
		{ key: 'views', label: 'Page Views', value: '9,582', icon: 'trophy' },
	]
	return (
		<>
			<Grid.Row>
				<Panel title='Approval Table' headerElement='h5'>
					<Widget.Table.ApprovalTable />
				</Panel>
				<Panel title='Grouped Statistics' headerElement='h5'>
					<Statistic.Group
						items={groupedStatistics}
						widths={groupedStatistics.length}
					/>
				</Panel>
			</Grid.Row>

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

			<Grid.Row>
				<Panel title='Complex Structured Table' headerElement='h5'>
					<Widget.Table.ComplexStructuredTable />
				</Panel>
			</Grid.Row>
		</>
	)
}

export default DemoDashboard
