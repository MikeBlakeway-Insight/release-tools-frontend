import React from 'react'
import { Menu } from 'semantic-ui-react'

import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'

export const MenuContainer = ({ menuItems }) => {
	return menuItems.map((item, i) => (
		<Menu.Item key={i}>
			<Link to={item.path}>
				<Menu.Header>{item.header}</Menu.Header>
			</Link>
			<Menu.Menu>
				<MenuItems links={item.subRoutes} />
			</Menu.Menu>
		</Menu.Item>
	))
}

export default MenuContainer
