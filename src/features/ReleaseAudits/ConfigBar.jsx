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

import { getFixVersions } from '../../services/getFixVersions'
import ACTIONS from '../../redux/constants'
const {
	CONFIG__TOGGLE_REFRESH,
	CONFIG__TOGGLE_RELEASED,
	FIXVERSION__UPDATE_SELECTED,
} = ACTIONS

export const ConfigBar = ({ endpoint }) => {
	const dispatch = useDispatch()

	// State
	const { fixVersions, config } = useSelector(state => state.releaseAudits)
	const [dropdownValue, setDropdownValue] = useState('')

	// Handlers
	const changeFixVersion = (e, { value }) => setDropdownValue(value)
	const handleUpdate = e => {
		e.preventDefault
		dispatch({ type: FIXVERSION__UPDATE_SELECTED, payload: dropdownValue })
	}
	const toggleReleased = () =>
		dispatch({ type: CONFIG__TOGGLE_RELEASED, payload: !config.showReleased })
	const toggleRefresh = () =>
		dispatch({ type: CONFIG__TOGGLE_REFRESH, payload: !config.refresh })

	useEffect(() => {
		getFixVersions(`${endpoint}?showReleased=${config.showReleased}`, dispatch)
	}, [config.showReleased])

	return (
		<>
			<Card fluid color='pink'>
				<Card.Content>
					<Grid verticalAlign='middle'>
						<Grid.Column width={4}>
							<Checkbox
								checked={config.showReleased}
								onClick={toggleReleased}
								toggle
								label='Show Released'
							/>
						</Grid.Column>
						<Grid.Column width={5}>
							{fixVersions.loading ? (
								<Placeholder>
									<Placeholder.Line />
									<Placeholder.Line />
								</Placeholder>
							) : (
								<Dropdown
									fluid
									selection
									placeholder='Select release'
									options={fixVersions.list}
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
								checked={!config.refresh}
								onClick={toggleRefresh}
							/>
						</Grid.Column>
					</Grid>
				</Card.Content>
			</Card>

			{fixVersions.error && (
				<Message negative>
					<Message.Header>Error</Message.Header>
					<p>{fixVersions.error}</p>
				</Message>
			)}
		</>
	)
}

export default ConfigBar
