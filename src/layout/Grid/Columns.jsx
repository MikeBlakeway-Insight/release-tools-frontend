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
		overflowX: 'hidden',
		flex: '1 1 0%',
	}

	return (
		<div style={styles} data-testid='ColumnLeft'>
			{children}
		</div>
	)
}

export const ColumnRight = ({ children }) => {
	const styles = {
		marginLeft: '250px',
		minWidth: '550px',
		backgroundColor: '#eee1',
	}
	return (
		<div style={styles} data-testid='ColumnRight'>
			{children}
		</div>
	)
}
