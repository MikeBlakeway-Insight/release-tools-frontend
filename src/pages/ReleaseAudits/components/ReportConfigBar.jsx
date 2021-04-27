import React, { useEffect, useState } from 'react'
import {
	Button,
	Card,
	Checkbox,
	Dropdown,
	Grid,
	Icon,
	Message,
	Placeholder,
} from 'semantic-ui-react'

export const ReportConfigBar = ({
	changeSelection,
	checked,
	dropdownOptions,
	error,
	isLoading,
	setChecked,
}) => {
	const handleDropdownSelect = (e, { value }) => changeSelection(value)
	const toggleChecked = () => setChecked(value => !value)
	return (
		<>
			<Card fluid color='pink'>
				<Card.Content>
					<Grid verticalAlign='middle'>
						<Grid.Column width={4}>
							<Checkbox
								checked={checked}
								onClick={toggleChecked}
								toggle
								label='Show Released'
							/>
						</Grid.Column>
						<Grid.Column width={5}>
							{isLoading ? (
								<Placeholder>
									<Placeholder.Line />
									<Placeholder.Line />
								</Placeholder>
							) : (
								<Dropdown
									fluid
									selection
									placeholder='Select release'
									options={dropdownOptions}
									onChange={handleDropdownSelect}
								/>
							)}
						</Grid.Column>
						<Grid.Column width={4}>
							<Button basic icon color='blue' size='small' labelPosition='left'>
								<Icon name='play' color='blue' />
								Run Report
							</Button>
						</Grid.Column>
						<Grid.Column width={3} floated='right'>
							<Checkbox radio label='Use Cache' />
						</Grid.Column>
					</Grid>
				</Card.Content>
			</Card>

			{error && (
				<Message negative>
					<Message.Header>Error</Message.Header>
					<p>{error}</p>
				</Message>
			)}
		</>
	)
}

export default ReportConfigBar
