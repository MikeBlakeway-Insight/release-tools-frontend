import React from 'react'
import { Grid, Header, Icon, Segment } from 'semantic-ui-react'

export const Panel = ({ children, title, headerElement }) => {
	return (
		<Grid.Column>
			<Segment raised>
				<Segment basic color='blue'>
					{title && (
						<Header as={headerElement} floated='left'>
							{title}
						</Header>
					)}
					<Header as='h5' floated='right'>
						<Icon name='refresh' color='grey' link />
					</Header>
				</Segment>
				<Segment basic>{children}</Segment>
			</Segment>
		</Grid.Column>
	)
}

export default Panel
