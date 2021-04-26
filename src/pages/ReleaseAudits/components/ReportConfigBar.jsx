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

<<<<<<< HEAD
export const ReportConfigBar = ({ url, changeSelection }) => {
=======
export const ReportConfigBar = ({ apiUrl, changeSelection }) => {
>>>>>>> cc989b39fdc6f3d2b5ca781a83c93175a5dc6057
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [dropdownOptions, setDropdownOptions] = useState([])

	useEffect(() => {
		const doFetch = async () => {
			setIsLoading(true)
			try {
<<<<<<< HEAD
				const res = await fetch(url)
=======
				const res = await fetch(apiUrl)
>>>>>>> cc989b39fdc6f3d2b5ca781a83c93175a5dc6057
				const body = await res.json()
				setDropdownOptions(
					// converting the body response into a new array for the dropdown component options
					body.map(object => {
						return {
							key: object.id,
							text: object.name,
							value: object.name,
						}
					})
				)
				setIsLoading(false)
			} catch (error) {
				setError(error)
				setIsLoading(false)
			}
		}
		doFetch()
	}, [])

	const handleDropdownSelect = (e, { value }) => changeSelection(value)
	return (
		<>
			{isLoading ? (
				<Placeholder>
					<Placeholder.Line />
					<Placeholder.Line />
					<Placeholder.Line />
					<Placeholder.Line />
					<Placeholder.Line />
				</Placeholder>
			) : (
<<<<<<< HEAD
				<Card fluid color='pink'>
=======
				<Card fluid color='blue'>
>>>>>>> cc989b39fdc6f3d2b5ca781a83c93175a5dc6057
					<Card.Content>
						<Grid verticalAlign='middle'>
							<Grid.Column width={4}>
								<Checkbox toggle label='Show Released' />
							</Grid.Column>
							<Grid.Column width={5}>
								<Dropdown
									fluid
									selection
									placeholder='Select release'
									options={dropdownOptions}
									onChange={handleDropdownSelect}
								/>
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
			)}

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
