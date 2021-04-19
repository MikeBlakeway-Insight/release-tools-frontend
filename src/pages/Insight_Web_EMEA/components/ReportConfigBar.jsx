import React from 'react'
import { Button, Card, Checkbox, Dropdown, Grid, Icon } from 'semantic-ui-react'

export const ReportConfigBar = ({ options }) => (
	<Card fluid color='blue'>
		<Card.Content>
			<Grid verticalAlign='middle'>
				<Grid.Column width={4}>
					<Checkbox toggle label='Show Released' />
				</Grid.Column>
				<Grid.Column width={5}>
					<Dropdown fluid selection placeholder='Select release' options={options} />
				</Grid.Column>
				<Grid.Column width={4}>
					<Button size='mini' icon labelPosition='left'>
						<Icon name='play' />
						Run Report
					</Button>
				</Grid.Column>
				<Grid.Column width={3} floated='right'>
					<Checkbox radio label='Use Cache' />
				</Grid.Column>
			</Grid>
		</Card.Content>
	</Card>
)

export default ReportConfigBar
