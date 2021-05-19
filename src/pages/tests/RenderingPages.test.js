import React from 'react'

import { render } from '@testing-library/react'

import { HomePage, PageNotFound } from '..'

describe('Pages test suite', () => {
	test('renders HomePage', () => {
		render(<HomePage />)
	})
	test('renders PageNotFound', () => {
		render(<PageNotFound />)
	})
})
