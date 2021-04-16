import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Grid } from 'semantic-ui-react'
import { Panel } from '../layout/Grid'

import { demoAreaChartData } from '../data/demo-data'

export const HomePage = () => {
	return (
		<Grid.Row>
			<Panel title='Release Process Time'>
				<HighchartsReact
					highcharts={Highcharts}
					constructorType={'chart'}
					options={demoAreaChartData}
				/>
			</Panel>
		</Grid.Row>
	)
}

export default HomePage
