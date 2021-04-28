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
import { fetchReleases } from '../../api/fetchReleases'

export const ReportConfigBar = ({ setFixVersion, endpoint }) => {
	// State
	const [release, setRelease] = useState([])
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [checked, setChecked] = useState(false)
	const [dropdownValue, setDropdownValue] = useState('')

	// Handlers
	const handleDropdownSelect = (e, { value }) => setDropdownValue(value)
	const handleClick = e => {
		e.preventDefault
		setFixVersion(dropdownValue)
	}
	const toggleChecked = () => setChecked(checked => !checked)

	useEffect(() => {
		fetchReleases(`${endpoint}?showReleased=${checked}`, {
			setError,
			setIsLoading,
			setData: setRelease,
		})
	}, [checked])

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
									options={release}
									onChange={handleDropdownSelect}
								/>
							)}
						</Grid.Column>
						<Grid.Column width={4}>
							<Button
								basic
								icon
								color='blue'
								size='small'
								labelPosition='left'
								onClick={handleClick}
							>
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
