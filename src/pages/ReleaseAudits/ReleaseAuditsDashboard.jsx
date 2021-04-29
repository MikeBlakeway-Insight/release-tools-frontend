import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { audit_cards } from './config/dashboard_config'

export const ReleaseAuditsDashboard = () => {
	return (
		<Grid.Row>
			<Grid.Column>
				<Card.Group items={audit_cards} itemsPerRow={3} />
			</Grid.Column>
		</Grid.Row>
	)
}

export default ReleaseAuditsDashboard
