import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { TableExampleCelledStriped, TableExamplePositiveNegative } from './'

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

export default TablesExampleRow
