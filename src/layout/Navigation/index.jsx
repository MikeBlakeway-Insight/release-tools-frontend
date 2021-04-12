import React from 'react'
import { Header, Menu, Divider, Icon } from 'semantic-ui-react'
import { endpointsList, auditsList } from './menu-items'
import MenuContainer from './MenuContainer'

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
		<Menu fluid borderless compact inverted vertical>
			<Header
				as='h3'
				textAlign='center'
				inverted
				content='RELEASE TOOL'
				style={{ paddingTop: '1rem' }}
			/>

			<Divider />

			<Menu.Item>
				<Icon name='paper plane outline' />
				<Menu.Header>REPORTS</Menu.Header>
				<MenuContainer menuItems={auditsList} />
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
