import React from 'react'

export const ColumnLeft = ({ children }) => {
	return (
		<div className='col-left' data-testid='ColumnLeft'>
			<div className='menu-container'>{children}</div>
		</div>
	)
}

export const ColumnRight = ({ children }) => {
	return (
		<div className='col-right' data-testid='ColumnRight'>
			{children}
		</div>
	)
}
