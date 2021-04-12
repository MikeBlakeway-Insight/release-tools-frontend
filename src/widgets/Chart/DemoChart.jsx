import React from 'react'

export const DemoChart = () => {
	return (
		<div
			id='flot-profile'
			className='flotchart'
			style={{ padding: '0px', position: 'relative' }}
		>
			<canvas
				className='flot-base'
				width='1050'
				height='246'
				style={{
					direction: 'ltr',
					position: 'absolute',
					left: '0px',
					top: '0px',
					width: '525px',
					height: '123px',
				}}
			></canvas>
			<canvas
				className='flot-overlay'
				width='1050'
				height='246'
				style={{
					direction: 'ltr',
					position: 'absolute',
					left: '0px',
					top: '0px',
					width: '525px',
					height: '123px',
				}}
			></canvas>
		</div>
	)
}

export default DemoChart
