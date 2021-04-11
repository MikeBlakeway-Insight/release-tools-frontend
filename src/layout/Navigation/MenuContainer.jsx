import React from 'react'
import { Menu } from 'semantic-ui-react'
import { menuItems } from '../../constants/menu-items'
import MenuItems from './MenuItems'

export const MenuContainer = () => {
	return menuItems.map((menuItem, i) => (
		<Menu.Item key={i}>
			<Menu.Header>{menuItem.header}</Menu.Header>

			<Menu.Menu>
				<MenuItems links={menuItem.names} />
			</Menu.Menu>
		</Menu.Item>
	))
}

export default MenuContainer
