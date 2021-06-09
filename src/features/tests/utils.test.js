import * as Utils from '../utils'
/**
 * createAuditEndpoint(project, version) {
 *    const endpoint = selectAuditEndpoint(project.active)
 *    return `${endpoint}?jql=fixVersion=${version.active}&refresh=${version.refresh}`}
 */

const {
	selectAuditEndpoint,
	utils: { createAuditEndpoint },
} = Utils

describe('selectAuditEndpoint method', () => {
	const matchers = {
		itc: /insight\/itc/,
		web: /insight\/web/,
	}

	test('selectAuditEndpoint returns ITC endpoint', () => {
		const assertion = selectAuditEndpoint('ITC')

		expect(assertion).toMatch(matchers.itc)
		expect(assertion).not.toMatch(matchers.web)
	})
	test('selectAuditEndpoint returns WKTLO endpoint', () => {
		const assertion = selectAuditEndpoint('WKTLO')

		expect(assertion).toMatch(matchers.web)
		expect(assertion).not.toMatch(matchers.itc)
	})
	test('selectAuditEndpoint returns GNA endpoint', () => {
		const assertion = selectAuditEndpoint('GNA')

		expect(assertion).toMatch(matchers.web)
		expect(assertion).not.toMatch(matchers.itc)
	})
	test('selectAuditEndpoint returns ICARE endpoint', () => {
		const assertion = selectAuditEndpoint('ICARE')

		expect(assertion).toMatch(matchers.web)
		expect(assertion).not.toMatch(matchers.itc)
	})
	test('selectAuditEndpoint returns WEB endpoint from GNA', () => {
		const assertion = selectAuditEndpoint('GNA')

		expect(assertion).toMatch(matchers.web)
		expect(assertion).not.toMatch(matchers.itc)
	})

	test('selectAuditEndpoint error handling', () => {
		try {
			selectAuditEndpoint('')
		} catch (error) {
			expect(error).toBeInstanceOf(Error)
			expect(error).not.toBeInstanceOf(String)

			expect(error).toHaveProperty('message', 'Project not recognised')
			expect(error).not.toHaveProperty('message', 'Project recognised')
		}

		try {
			selectAuditEndpoint({})
		} catch (error) {
			expect(error).toBeInstanceOf(Error)
			expect(error).not.toBeInstanceOf(String)

			expect(error).toHaveProperty('message', 'Project must be a string')
			expect(error).not.toHaveProperty('message', 'Project must be a letter')
		}
	})
})

describe('createAuditEndpoint method', () => {
	const matchers = { itc: /insight\/itc/, web: /insight\/web/ }
	const testObject = {
		project: {
			active: 'WKTLO',
		},
		version: {
			active: 'active-version',
			refresh: false,
		},
	}

	test('createAuditEndpoint returns a string', () => {
		const expected = createAuditEndpoint(testObject.project, testObject.version)

		expect(expected).toMatch(matchers.web)
	})
})
