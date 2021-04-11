import React from 'react'
import { Menu } from 'semantic-ui-react'
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
const Navigation = () => {
	return (
		<Menu fluid borderless inverted vertical>
			<Menu.Item header>RELEASE TOOL</Menu.Item>
			<MenuContainer />
		</Menu>
	)
}

export default Navigation
