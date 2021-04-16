import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Card, Grid, Icon, Statistic, Table } from 'semantic-ui-react'

import { demoAreaChartData } from '../data/demo-data'

export const HighChartDemoArea = () => (
	<Grid.Row>
		<Grid.Column>
			<Card fluid color='yellow'>
				<Card.Content>
					<HighchartsReact
						highcharts={Highcharts}
						constructorType={'chart'}
						options={demoAreaChartData}
					/>
				</Card.Content>
			</Card>
		</Grid.Column>
	</Grid.Row>
)
export const TablesExampleRow = () => (
	<Grid.Row>
		<Grid.Column>
			<Card.Group itemsPerRow={2}>
				<Card color='green'>
					<Card.Content header='Version Control' meta='Latest Build: Today 14:09' />
					<Card.Content>
						<TableExampleCelledStriped />
					</Card.Content>
				</Card>
				<Card color='green'>
					<Card.Content header='Developer Status' />
					<Card.Content>
						<TableExamplePositiveNegative />
					</Card.Content>
				</Card>
			</Card.Group>
		</Grid.Column>
	</Grid.Row>
)
export const StatsExampleRow = () => (
	<Grid.Row>
		<Grid.Column>
			<Card.Group itemsPerRow={2}>
				<Card color='red'>
					<Card.Content header='Sprints' meta='Latest Sprint: 2021 Sprint 8' />
					<Card.Content>
						<Statistic label='Issues Completed' value='4' />
						<Statistic label='Issues In Progress' value='11' />
						<Statistic label='Issues In ToDo' value='732' />
					</Card.Content>
				</Card>
				<Card color='red'>
					<Card.Content header='Releases' meta='Latest Release: 2021-April.1' />
					<Card.Content>
						<Statistic label='releases pending' value='2' />
						<Statistic label='projects open' value='7' />
						<Statistic label='projects closed' value='11' />
					</Card.Content>
				</Card>
			</Card.Group>
		</Grid.Column>
	</Grid.Row>
)

export const TableExampleCelledStriped = () => (
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

export const TableExamplePositiveNegative = () => (
	<Table celled>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>Name</Table.HeaderCell>
				<Table.HeaderCell>Status</Table.HeaderCell>
				<Table.HeaderCell>Notes</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			<Table.Row warning>
				<Table.Cell>Teddy</Table.Cell>
				<Table.Cell>Unknown</Table.Cell>
				<Table.Cell>None</Table.Cell>
			</Table.Row>
			<Table.Row positive>
				<Table.Cell>Jimmy</Table.Cell>
				<Table.Cell>
					<Icon name='checkmark' />
					Available
				</Table.Cell>
				<Table.Cell>None</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Jamie</Table.Cell>
				<Table.Cell>Unknown</Table.Cell>
				<Table.Cell warning>Requires call</Table.Cell>
			</Table.Row>
			<Table.Row negative>
				<Table.Cell>Jill</Table.Cell>
				<Table.Cell>
					<Icon name='close' />
					Unavailable
				</Table.Cell>
				<Table.Cell>Annual Leave</Table.Cell>
			</Table.Row>
			<Table.Row positive>
				<Table.Cell>Bob</Table.Cell>
				<Table.Cell>
					<Icon name='checkmark' />
					Available
				</Table.Cell>
				<Table.Cell>None</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table>
)
