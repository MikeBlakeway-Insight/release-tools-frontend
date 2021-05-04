import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { demoAreaChartData } from '../../data/demo-data'

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

export default HighChartDemoArea
