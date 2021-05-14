import React, { useState } from 'react'
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
} from '../redux/versionSlice'
import { changeActiveProject } from '../redux/projectSlice'

export const ConfigBar = ({ resetHandler }) => {
	const dispatch = useDispatch()

	// State
	const { project, version } = useSelector(state => state)

	const [activeVersion, setActiveVersion] = useState('')

	// Handlers
	const handlers = {
		changeFixVersion: (e, { value }) => setActiveVersion(value),
		changeProject: (e, { value }) => {
			dispatch(changeActiveProject(value))
			dispatch(changeActiveVersion(''))
			dispatch(resetHandler([]))
		},
		handleUpdate: e => {
			e.preventDefault
			dispatch(changeActiveVersion(activeVersion))
		},
		toggleReleased: () => dispatch(changeShowReleased(!version.showReleased)),
		toggleRefresh: () => dispatch(changeRefresh(!version.refresh)),
	}

	return (
		<>
			<Card fluid color='pink' data-testid='config-bar'>
				<Card.Content>
					<Grid verticalAlign='middle'>
						<Grid.Column width={2} floated='right'>
							<Checkbox
								radio
								label='Use Cache'
								checked={!version.refresh}
								onClick={handlers.toggleRefresh}
							/>
						</Grid.Column>
						<Grid.Column width={3}>
							<Checkbox
								checked={version.showReleased}
								onClick={handlers.toggleReleased}
								toggle
								label='Show Released'
							/>
						</Grid.Column>

						{version.loading ? (
							<Loading width={4} />
						) : (
							<Grid.Column width={4}>
								<Dropdown
									disabled={project.active === ''}
									fluid
									selection
									placeholder='Select Release'
									options={version.versions}
									onChange={handlers.changeFixVersion}
								/>
							</Grid.Column>
						)}
						{project.loading ? (
							<Loading width={3} />
						) : (
							<Grid.Column width={3}>
								<Dropdown
									fluid
									selection
									placeholder='Select Project'
									options={project.projects}
									onChange={handlers.changeProject}
								/>
							</Grid.Column>
						)}
						<Grid.Column width={4}>
							<Button
								basic
								icon
								color='blue'
								size='small'
								labelPosition='left'
								onClick={handlers.handleUpdate}
							>
								<Icon name='play' color='blue' />
								Run Report
							</Button>
						</Grid.Column>
					</Grid>
				</Card.Content>
			</Card>
			{version.error || project.error ? (
				<Message negative>
					<Message.Header>Error</Message.Header>
					<p>{version.error.message || project.error.message}</p>
				</Message>
			) : (
				''
			)}
		</>
	)
}

const Loading = ({ width }) => (
	<Grid.Column width={width}>
		<Placeholder>
			<Placeholder.Line />
			<Placeholder.Line />
		</Placeholder>
	</Grid.Column>
)

export default ConfigBar
