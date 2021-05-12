import React from 'react'
import * as redux from 'react-redux'
import { render } from '@testing-library/react'

import ReleaseAudit from '../ReleaseAudit'

describe('ReleaseAudit test suite', () => {
	const useSelectorMock = jest.spyOn(redux, 'useSelector')
	const useDispatchMock = jest.spyOn(redux, 'useDispatch')
	const mockFunction = jest.fn()

	const mockState = {
		audit: {
			loading: false,
			error: '',
			data: [],
		},
		version: {
			showReleased: true,
			refresh: false,
			loading: false,
			error: '',
			versions: [],
			active: '',
		},
	}
	beforeEach(() => {
		useSelectorMock.mockClear()
		useDispatchMock.mockClear()
	})

	test('renders ok', () => {
		useDispatchMock.mockReturnValue(mockFunction)
		useSelectorMock.mockReturnValue(mockState)

		const { getByTestId } = render(<ReleaseAudit />)

		expect(getByTestId('configbar-container')).toBeInTheDocument()
		expect(getByTestId('audit-table')).toBeInTheDocument()
	})
})
