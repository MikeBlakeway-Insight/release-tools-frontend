import React from 'react'
import ReleaseAuditsDashboard from './ReleaseAuditsDashboard'

import {
	HighChartDemoArea,
	StatsExampleRow,
	TablesExampleRow,
} from '../layout/Placeholders'

export const HomePage = () => {
	return (
		<>
			<ReleaseAuditsDashboard />
			<StatsExampleRow />
			<TablesExampleRow />
			<HighChartDemoArea />
		</>
	)
}
export default HomePage
