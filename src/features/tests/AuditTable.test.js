import React from 'react'
import * as redux from 'react-redux'
import utils from '../ReleaseAudits/utils'
import { render } from '@testing-library/react'

import AuditTable from '../ReleaseAudits/AuditTable'

describe('AuditTable test suite', () => {
	const mockUseSelector = jest.spyOn(redux, 'useSelector')
	mockUseSelector.mockReturnValue({ project: 'project', version: 'version' })
	test('renders ok', () => {
		render(<AuditTable />)

		// const { getByTestId } = render(<AuditTable />)

		// expect(getByTestId('audit-table')).toBeInTheDocument()
	})
})
