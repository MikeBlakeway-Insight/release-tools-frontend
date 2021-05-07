import React from 'react'
import { render as renderWithRedux } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { rootReducer as reducer } from '../redux/rootReducer'

const render = (
	ui,
	{
		initialState,
		store = createStore(reducer, initialState),
		...renderOptions
	} = {}
) => {
	const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>

	return renderWithRedux(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
