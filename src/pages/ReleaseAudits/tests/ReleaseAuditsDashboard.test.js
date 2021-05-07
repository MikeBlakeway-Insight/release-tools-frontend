import React from 'react'
import { render } from '@testing-library/react'

import ReleaseAuditsDashboard from '../ReleaseAuditsDashboard'

describe('ReleaseAuditsDashboard test suite', () => {
	test('renders ok', () => {
		render(<ReleaseAuditsDashboard />)
	})
})
