import React from 'react'
import { render } from '@testing-library/react'

import AuditTable from '../AuditTable'

describe('AuditTable test suite', () => {
	test('renders ok', () => {
		// cont { headers, expanded_headers, rows }
		const rows = []
		render(<AuditTable rows={rows} />)
	})
})
