import * as Utils from '../utils'
/**
 * createAuditEndpoint(project, version) {
 *    const endpoint = selectAuditEndpoint(project.active)
 *    return `${endpoint}?jql=fixVersion=${version.active}&refresh=${version.refresh}`}
 */
describe('ReleaseAudit utils', () => {
	// const mockState = {
	// 	project: {
	// 		active: '',
	// 	},
	// 	version: {
	// 		active: '',
	// 		refresh: false,
	// 	},
	// }

	// 	it('calls selectAuditEndpoint once', () => {
	// 		const auditEndpoint = utils.createAuditEndpoint(
	// 			mockState.project,
	// 			mockState.version
	// 		)

	// 		expect(auditEndpoint).toBe(
	// 			'/api/v1/insight/web/audit/web?jql=fixVersion=&refresh=false'
	// 		)
	// 	})
	// })
	const { selectAuditEndpoint } = Utils

	test('selectAuditEndpoint method', () => {
		// jest.spyOn(Utils, 'selectAuditEndpoint')
		// jest.mock('../ReleaseAudits/utils', () => ({
		// 	selectAuditEndpoint: jest.fn(() => mockEndpoint),
		// }))
		expect(selectAuditEndpoint()).toEqual(expect.any(String))
	})
})
