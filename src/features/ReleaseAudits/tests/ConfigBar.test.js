import React from 'react'
import * as redux from 'react-redux'
import { render } from '@testing-library/react'

import ConfigBar from '../ConfigBar'

describe('ConfigBar test suite', () => {
	const useSelectorMock = jest.spyOn(redux, 'useSelector')
	const useDispatchMock = jest.spyOn(redux, 'useDispatch')
	const mockFunction = jest.fn()

	const mockState = {
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

	test('renders config-bar', () => {
		useSelectorMock.mockReturnValue(mockState)
		useDispatchMock.mockReturnValue(mockFunction)

		const { getByTestId } = render(<ConfigBar />)

		expect(getByTestId('config-bar')).toBeInTheDocument()
	})
})
