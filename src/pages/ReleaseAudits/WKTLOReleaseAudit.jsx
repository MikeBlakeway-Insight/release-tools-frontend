import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { tables_config } from './config/tables_config'
import { webAuditReportLines } from '../../data/webAuditRelease-response.json'
import { ExpandingRowsTable, ReportConfigBar } from './components'

import { api_config } from './config/api_config'

export const WKTLOReleaseAudit = () => {
	const [selectedRelease, changeSelectedRelease] = useState('')
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [dropdownOptions, setDropdownOptions] = useState([])
	const [checked, setChecked] = useState(false)

	const endpoint = `${api_config.versions.url}WKTLO?showReleased=${checked}`
	const {
		wktlo: { expanded_headers, headers },
	} = tables_config

	useEffect(() => {
		const doFetch = async () => {
			setIsLoading(true)
			try {
				const res = await fetch(endpoint)
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
	}, [checked])
	return (
		<>
			<Grid.Row>
				<Grid.Column>
					<ReportConfigBar
						isLoading={isLoading}
						setChecked={setChecked}
						checked={checked}
						changeSelection={changeSelectedRelease}
						dropdownOptions={dropdownOptions}
						error={error}
					/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<ExpandingRowsTable
						expanded_headers={expanded_headers}
						headers={headers}
						rows={webAuditReportLines}
					/>
				</Grid.Column>
			</Grid.Row>
		</>
	)
}

export default WKTLOReleaseAudit
