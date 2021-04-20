import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

export const ReleaseAuditsDashboard = () => {
	const cards = [
		{
			header: 'WKTLO Release Audit',
			description:
				'Run a web release audit for WKTLO tickets, designs and code commits',
			meta: 'Latest Release: 2021-April.1',
			href: '/wktlo-release-audit',
			extra: 'Click to select a release',
			color: 'blue',
		},
		{
			header: 'WKTLO Sprint Audit',
			description: 'Run a sprint audit by selecting a sprint from a board',
			meta: 'Latest Sprint: 2021 Sprint 8',
			href: '/wktlo-sprint-audit',
			extra: 'Click to select a board',
			color: 'blue',
		},
		{
			header: 'GNA Release Audit',
			description: 'Run a web release audit for GNA',
			meta: 'Latest Release: 2021.08.14',
			href: '/gna-release-audit',
			extra: 'Click To Run Report',
			color: 'blue',
		},
	]
	return (
		<Grid.Row>
			<Grid.Column>
				<Card.Group items={cards} itemsPerRow={3} />
			</Grid.Column>
		</Grid.Row>
	)
}

export default ReleaseAuditsDashboard
