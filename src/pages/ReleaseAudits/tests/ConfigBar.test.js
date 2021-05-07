import React from 'react'

/**
 * We're using our own custom render function and not RTL's render
 * our custom utils also re-export everything from RTL so we can import
 * fireEvent and screen here as well
 */
import { render } from '../../../tests/test-utils'

import ConfigBar from '../ConfigBar'

describe('ConfigBar test suite', () => {
	test('renders ok', () => {
		render(<ConfigBar />, { initialState: {} })
	})
})
