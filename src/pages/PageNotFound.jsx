import React from 'react'
import { Container } from 'semantic-ui-react'

export const PageNotFound = () => {
	return (
		<Container
			style={{
				position: 'relative',
				height: '100vh',
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%)',
					maxWidth: '520px',
					width: '100%',
					lineHeight: '1.4',
					textAlign: 'center',
				}}
			>
				<div style={{ position: 'relative', height: '240px' }}>
					<h3
						style={{
							fontFamily: 'cabin,sans-serif',
							position: 'relative',
							fontSize: '16px',
							fontWeight: '700',
							textTransform: 'uppercase',
							color: '#262626',
							margin: '0',
							letterSpacing: '3px',
							paddingLeft: '6px',
						}}
					>
						Oops! Its not ready yet!
					</h3>
					<h1
						style={{
							fontFamily: 'montserrat,sans-serif',
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%,-50%)',
							fontSize: '252px',
							fontWeight: '900',
							margin: '0',
							color: '#262626',
							textTransform: 'uppercase',
							letterSpacing: '-40px',
							marginLeft: '-20px',
						}}
					>
						<span
							style={{
								textShadow: '-8px 0 0 #fff',
							}}
						>
							4
						</span>
						<span
							style={{
								textShadow: '-8px 0 0 #fff',
							}}
						>
							0
						</span>
						<span
							style={{
								textShadow: '-8px 0 0 #fff',
							}}
						>
							4
						</span>
					</h1>
				</div>
				<h2
					style={{
						fontFamily: 'cabin,sans-serif',
						fontSize: '20px',
						fontWeight: '400',
						textTransform: 'uppercase',
						color: '#000',
						marginTop: '0',
						marginBottom: '25px',
					}}
				>
					we are sorry, but the page you requested has not been implemented yet
				</h2>
			</div>
		</Container>
	)
}

export default PageNotFound
