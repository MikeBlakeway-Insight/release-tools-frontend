import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

export const HeaderWidget = ({ element, title }) => {
	return (
		<Segment basic color='blue'>
			<Header as={element} floated='left'>
				{title}
			</Header>
			<Header as='h5' floated='right'>
				<Icon name='refresh' color='grey' link />
				<Icon name='close' color='grey' link />
			</Header>
		</Segment>
	)
}

export default HeaderWidget
