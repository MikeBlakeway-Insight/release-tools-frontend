import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
import { fetchReleases } from './api/fetchReleases'

export const ConfigBar = ({ endpoint }) => {
	const dispatch = useDispatch()

	// State
	const [checked, setChecked] = useState(false)
	const [dropdownValue, setDropdownValue] = useState('')

	const useCache = useSelector(state => state.webAudit.refresh)

	const releaseIsLoading = useSelector(state => state.webAudit.release.loading)
	const releaseError = useSelector(state => state.webAudit.release.error)
	const release = useSelector(state => state.webAudit.release.data)

	// Handlers
	const handleDropdownSelect = (e, { value }) => setDropdownValue(value)
	const handleClick = e => {
		e.preventDefault
		dispatch({ type: 'SET_FIXVERSION', payload: dropdownValue })
	}
	const toggleChecked = () => setChecked(checked => !checked)
	const toggleUseCache = () =>
		dispatch({ type: 'SET_REFRESH', payload: !useCache })

	useEffect(() => {
		fetchReleases(`${endpoint}?showReleased=${checked}`, dispatch)
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
							{releaseIsLoading ? (
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
							<Checkbox
								radio
								label='Use Cache'
								checked={!useCache}
								onClick={toggleUseCache}
							/>
						</Grid.Column>
					</Grid>
				</Card.Content>
			</Card>

			{releaseError && (
				<Message negative>
					<Message.Header>Error</Message.Header>
					<p>{releaseError}</p>
				</Message>
			)}
		</>
	)
}

export default ConfigBar
