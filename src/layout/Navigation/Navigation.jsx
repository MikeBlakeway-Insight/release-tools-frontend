import React from 'react'
import { Header, Menu, Divider, Icon } from 'semantic-ui-react'
import { endpointsList, reportsList } from './menu-items'
import MenuContainer from './MenuContainer'
import { Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'

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
		<Menu fluid borderless compact vertical data-testid='Navigation'>
			<Link to='/'>
				<Header
					as='h3'
					textAlign='center'
					image={Logo}
					content='Audit Metrics System'
					style={{ paddingTop: '1rem' }}
				/>
			</Link>
			<Divider />

			<Menu.Item>
				<Icon name='chain' />
				<Menu.Header>QUICK LINKS</Menu.Header>
				<MenuContainer menuItems={reportsList} />
			</Menu.Item>

			<Divider />
			<Menu.Item>
				<Icon name='list ol' />
				<Menu.Header>By Project</Menu.Header>
				<MenuContainer menuItems={endpointsList} />
			</Menu.Item>
		</Menu>
	)
}
export default Navigation
