import React from 'react'
import { render } from '@testing-library/react'

import AuditTable from '../AuditTable'

describe('AuditTable test suite', () => {
	test('renders ok', () => {
		const rows = []
		render(<AuditTable rows={rows} />)
	})
})
