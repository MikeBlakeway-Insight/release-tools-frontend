import React, { useState } from 'react'
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
	const [activeLink, setActiveLink] = useState('')
	const activeLinkState = { activeLink, setActiveLink }

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
				<Menu.Header>Quick Links</Menu.Header>
				<MenuContainer menuItems={reportsList} activeLinkState={activeLinkState} />
			</Menu.Item>

			<Divider />
			<Menu.Item>
				<Icon name='list ol' />
				<Menu.Header>By Project</Menu.Header>
				<MenuContainer
					menuItems={endpointsList}
					activeLinkState={activeLinkState}
				/>
			</Menu.Item>
		</Menu>
	)
}
export default Navigation
