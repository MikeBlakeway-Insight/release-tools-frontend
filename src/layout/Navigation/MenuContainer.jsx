import React from 'react'
import { Menu } from 'semantic-ui-react'

import MenuItems from './MenuItems'

export const MenuContainer = ({ menuItems, activeLinkState }) => {
	return menuItems.map((item, i) => (
		<Menu.Item key={i}>
			<Menu.Header>{item.header}</Menu.Header>
			<Menu.Menu>
				<MenuItems links={item.subRoutes} activeLinkState={activeLinkState} />
			</Menu.Menu>
		</Menu.Item>
	))
}

export default MenuContainer
