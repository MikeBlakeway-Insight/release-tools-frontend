import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const MenuItems = ({ links }) => {
	const [activeLink, setActiveLink] = useState('')

	const handleLinkClick = (e, { name }) => setActiveLink(name)

	return links.map((link, i) => (
		<Menu.Item
			key={i}
			name={link}
			active={activeLink === link}
			onClick={handleLinkClick}
		/>
	))
}

export default MenuItems
