import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { AUDIT_CARDS } from '../constants/dashboard'

export const ReleaseAuditsDashboard = () => {
	return (
		<Grid.Row>
			<Grid.Column>
				<Card.Group items={AUDIT_CARDS} itemsPerRow={3} />
			</Grid.Column>
		</Grid.Row>
	)
}

export default ReleaseAuditsDashboard
