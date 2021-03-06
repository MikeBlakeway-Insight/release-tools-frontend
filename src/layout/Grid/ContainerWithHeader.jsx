import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

export const ContainerWithHeader = ({ children, subTitle, title }) => {
	return (
		<Grid padded data-testid='ContainerWithHeader'>
			<Header
				as='h2'
				icon
				style={{ marginTop: '2rem', marginLeft: 0 }}
				textAlign='left'
			>
				{title}
				<Header.Subheader>{subTitle}</Header.Subheader>
			</Header>
			{children}
		</Grid>
	)
}

export default ContainerWithHeader
