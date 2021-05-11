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
import {
	changeActiveVersion,
	changeShowReleased,
	changeRefresh,
} from './versionSlice'
import { getFixVersions } from '../../services/getFixVersions'

export const ConfigBar = ({ endpoint }) => {
	const dispatch = useDispatch()

	// State
	const { version } = useSelector(state => state)

	const [dropdownValue, setDropdownValue] = useState('')

	// Handlers
	const changeFixVersion = (e, { value }) => setDropdownValue(value)
	const handleUpdate = e => {
		e.preventDefault
		dispatch(changeActiveVersion(dropdownValue))
	}
	const toggleReleased = () =>
		dispatch(changeShowReleased(!version.showReleased))

	const toggleRefresh = () => dispatch(changeRefresh(!version.refresh))

	useEffect(() => {
		getFixVersions(`${endpoint}?showReleased=${version.showReleased}`, dispatch)
	}, [version.showReleased])

	return (
		<>
			<Card fluid color='pink' data-testid='config-bar'>
				<Card.Content>
					<Grid verticalAlign='middle'>
						<Grid.Column width={4}>
							<Checkbox
								checked={version.showReleased}
								onClick={toggleReleased}
								toggle
								label='Show Released'
							/>
						</Grid.Column>
						<Grid.Column width={5}>
							{version.loading ? (
								<Placeholder>
									<Placeholder.Line />
									<Placeholder.Line />
								</Placeholder>
							) : (
								<Dropdown
									fluid
									selection
									placeholder='Select release'
									options={version.versions}
									onChange={changeFixVersion}
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
								onClick={handleUpdate}
							>
								<Icon name='play' color='blue' />
								Run Report
							</Button>
						</Grid.Column>
						<Grid.Column width={3} floated='right'>
							<Checkbox
								radio
								label='Use Cache'
								checked={!version.refresh}
								onClick={toggleRefresh}
							/>
						</Grid.Column>
					</Grid>
				</Card.Content>
			</Card>

			{version.error && (
				<Message negative>
					<Message.Header>Error</Message.Header>
					<p>{version.error}</p>
				</Message>
			)}
		</>
	)
}

export default ConfigBar
