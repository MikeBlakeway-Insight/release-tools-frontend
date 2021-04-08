import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { menuItems } from '../constants/menu-items'

const SidebarMenu = () => {
	const [activeItem, setActiveItem] = useState('inbox')

	const handleItemClick = (e, { name }) => setActiveItem(name)
	return (
		<div
			style={{
				position: 'fixed',
				display: 'flex',
				flexDirection: 'column',
				top: '0px',
				bottom: '0px',
				left: '0px',
				width: '250px',
				background: 'rgb(27, 28, 29)',
				overflowX: 'hidden',
				flex: '1 1 0%',
			}}
		>
			<Menu fluid borderless inverted vertical>
				<Menu.Item header>RELEASE TOOL</Menu.Item>
				{menuItems.map((menuItem, i) => (
					<Menu.Item key={i}>
						<Menu.Header>{menuItem.header}</Menu.Header>

						<Menu.Menu>
							{menuItem.names.map((name, i) => (
								<Menu.Item
									key={i}
									name={name}
									active={activeItem === name}
									onClick={handleItemClick}
								/>
							))}
						</Menu.Menu>
					</Menu.Item>
				))}
			</Menu>
		</div>
	)
}

export default SidebarMenu
