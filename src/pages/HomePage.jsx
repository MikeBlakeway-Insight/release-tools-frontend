import React from 'react'
import ReleaseAuditsDashboard from './ReleaseAudits/ReleaseAuditsDashboard'

import {
	HighChartDemoArea,
	StatsExampleRow,
	TablesExampleRow,
} from './Placeholders'

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
