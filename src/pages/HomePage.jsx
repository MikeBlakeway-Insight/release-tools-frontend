import React from 'react'
import AuditReports from './AuditReports'

import {
	HighChartDemoArea,
	StatsExampleRow,
	TablesExampleRow,
} from './Placeholders'

export const HomePage = () => {
	return (
		<>
			<AuditReports />
			<StatsExampleRow />
			<TablesExampleRow />
			<HighChartDemoArea />
		</>
	)
}
export default HomePage
