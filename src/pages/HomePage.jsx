import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Grid, Icon, Statistic, Table } from 'semantic-ui-react'
import { Panel } from '../layout/Grid'

import { demoAreaChartData } from '../data/demo-data'

export const HomePage = () => {
	return (
		<>
			<Grid.Row columns='equal'>
				<Grid.Column>
					<Panel>
						<Statistic label='Downloads' value='5,550' />
					</Panel>
				</Grid.Column>
				<Grid.Column>
					<Panel>
						<Statistic label='Downloads' value='5,550' />
					</Panel>
				</Grid.Column>
				<Grid.Column>
					<Panel>
						<Statistic label='Downloads' value='5,550' />
					</Panel>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Panel title='Release Process Time'>
					<HighchartsReact
						highcharts={Highcharts}
						constructorType={'chart'}
						options={demoAreaChartData}
					/>
				</Panel>
			</Grid.Row>
			<Grid.Row stretched columns={2}>
				<Panel title='Demo Celled Table'>
					<TableExampleCelledStriped />
				</Panel>
				<Panel title='Demo Positive/Negative Table'>
					<TableExamplePositiveNegative />
				</Panel>
			</Grid.Row>
		</>
	)
}

const TableExampleCelledStriped = () => (
	<Table celled striped>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			<Table.Row>
				<Table.Cell collapsing>
					<Icon name='folder' /> node_modules
				</Table.Cell>
				<Table.Cell>Initial commit</Table.Cell>
				<Table.Cell collapsing textAlign='right'>
					10 hours ago
				</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>
					<Icon name='folder' /> test
				</Table.Cell>
				<Table.Cell>Initial commit</Table.Cell>
				<Table.Cell textAlign='right'>10 hours ago</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>
					<Icon name='folder' /> build
				</Table.Cell>
				<Table.Cell>Initial commit</Table.Cell>
				<Table.Cell textAlign='right'>10 hours ago</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>
					<Icon name='file outline' /> package.json
				</Table.Cell>
				<Table.Cell>Initial commit</Table.Cell>
				<Table.Cell textAlign='right'>10 hours ago</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>
					<Icon name='file outline' /> Gruntfile.js
				</Table.Cell>
				<Table.Cell>Initial commit</Table.Cell>
				<Table.Cell textAlign='right'>10 hours ago</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table>
)

const TableExamplePositiveNegative = () => (
	<Table celled>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>Name</Table.HeaderCell>
				<Table.HeaderCell>Status</Table.HeaderCell>
				<Table.HeaderCell>Notes</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			<Table.Row>
				<Table.Cell>No Name Specified</Table.Cell>
				<Table.Cell>Unknown</Table.Cell>
				<Table.Cell negative>None</Table.Cell>
			</Table.Row>
			<Table.Row positive>
				<Table.Cell>Jimmy</Table.Cell>
				<Table.Cell>
					<Icon name='checkmark' />
					Approved
				</Table.Cell>
				<Table.Cell>None</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Jamie</Table.Cell>
				<Table.Cell>Unknown</Table.Cell>
				<Table.Cell positive>
					<Icon name='close' />
					Requires call
				</Table.Cell>
			</Table.Row>
			<Table.Row negative>
				<Table.Cell>Jill</Table.Cell>
				<Table.Cell>Unknown</Table.Cell>
				<Table.Cell>None</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table>
)
export default HomePage
