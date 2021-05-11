import React from 'react'
import { render } from '@testing-library/react'

import App from '../App'

describe('App test suite', () => {
	test('renders ok', () => {
		render(<App />)
	})
	test('renders ColumnLeft component', () => {
		const { getByTestId } = render(<App />)
		expect(getByTestId('ColumnLeft')).toBeInTheDocument()
	})
	test('renders ColumnRight component', () => {
		const { getByTestId } = render(<App />)
		expect(getByTestId('ColumnRight')).toBeInTheDocument()
	})
	test('renders the navigation menu', () => {
		const { getByTestId } = render(<App />)
		expect(getByTestId('Navigation')).toBeInTheDocument()
	})
	test('renders a container with headers', () => {
		const { getByTestId } = render(<App />)
		expect(getByTestId('ContainerWithHeader')).toBeInTheDocument()
	})
})
