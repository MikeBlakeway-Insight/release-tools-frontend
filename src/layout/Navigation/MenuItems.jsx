import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MenuItems = ({ links, activeLinkState }) => {
	const { activeLink, setActiveLink } = activeLinkState
	const handleLinkClick = (e, { name }) => setActiveLink(name)

	return links.map((link, i) => (
		<Menu.Item
			as={Link}
			link
			to={link.path}
			key={i}
			name={link.name}
			active={activeLink === link.name}
			onClick={handleLinkClick}
		/>
	))
}

export default MenuItems
