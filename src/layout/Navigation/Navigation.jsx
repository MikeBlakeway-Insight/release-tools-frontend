import React from 'react'
import { Header, Menu, Divider, Icon } from 'semantic-ui-react'
import { endpointsList, reportsList } from './menu-items'
import MenuContainer from './MenuContainer'
import { Link } from 'react-router-dom'

/**
 * ==============
 * * -- Navigation Component -- *
 *
 * Location:
 * src/layout/Navigation/index.jsx
 *
 * Description
 * ...
 */
export const Navigation = () => {
	return (
		<Menu fluid borderless compact inverted vertical data-testid='Navigation'>
			<Link to='/'>
				<Header
					as='h3'
					textAlign='center'
					inverted
					content='SDLC RELEASE TOOL'
					style={{ paddingTop: '1rem' }}
				/>
			</Link>
			<Divider />

			<Menu.Item>
				<Icon name='paper plane outline' />
				<Menu.Header>REPORTS</Menu.Header>
				<MenuContainer menuItems={reportsList} />
			</Menu.Item>

			<Divider />
			<Menu.Item>
				<Icon name='table' />
				<Menu.Header>ENDPOINTS</Menu.Header>
				<MenuContainer menuItems={endpointsList} />
			</Menu.Item>
		</Menu>
	)
}
export default Navigation
