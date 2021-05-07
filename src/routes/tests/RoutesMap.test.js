import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import RoutesMap from '../RoutesMap'

describe('RoutesMap test suite', () => {
	test('renders with a connected router', () => {
		render(
			<Router>
				<RoutesMap />
			</Router>
		)
	})
})
