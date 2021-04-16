import React from 'react'

export const ColumnLeft = ({ children }) => {
	const styles = {
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
	}

	return <div style={styles}>{children}</div>
}

export const ColumnRight = ({ children }) => {
	const styles = {
		marginLeft: '250px',
		minWidth: '550px',
		backgroundColor: '#eee1',
	}
	return <div style={styles}>{children}</div>
}
