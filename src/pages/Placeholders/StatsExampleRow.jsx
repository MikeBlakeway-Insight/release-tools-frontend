import React from 'react'
import { Card, Grid, Statistic } from 'semantic-ui-react'

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
