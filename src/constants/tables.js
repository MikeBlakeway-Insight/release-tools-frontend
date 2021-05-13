export const TABLES_CONFIG = {
	wktlo: {
		headers: [
			{
				title: 'Issue',
				subheaders: [
					'Key',
					'Summary',
					'ITC',
					'Type',
					'Labels',
					'Status',
					'Developer',
				],
			},
			{
				title: 'Design',
				subheaders: ['Required', 'Complete', 'Reviewed', 'Reviewer'],
			},
			{
				title: 'Code',
				subheaders: ['Required', 'Committed', 'Differentials'],
			},
		],
		expanded_headers: [
			'id',
			'title',
			'link',
			'status',
			'closed',
			'author',
			'reviewer',
			'codeReviewers',
			'repository',
		],
	},
	gna: {
		headers: [
			{
				title: 'Issue',
				subheaders: [
					'Key',
					'Summary',
					'ITC',
					'Type',
					'Labels',
					'Status',
					'Developer',
				],
			},
			{
				title: 'Design',
				subheaders: ['Required', 'Complete', 'Reviewed', 'Reviewer'],
			},
			{
				title: 'Code',
				subheaders: ['Required', 'Committed', 'Differentials'],
			},
		],
		expanded_headers: [
			'id',
			'title',
			'link',
			'status',
			'closed',
			'author',
			'reviewer',
			'codeReviewers',
			'repository',
		],
	},
	itc: {
		headers: [
			{
				title: 'Issue',
				subheaders: [
					'Issue',
					'Linked Issues',
					'Labels',
					'Status',
					'In Production',
					'Release Date',
					'Release',
				],
			},
			{
				title: 'SDLC',
				subheaders: ['CAB', 'Ticket', 'Technical Owner', 'Tester', 'Resolution'],
			},
		],
	},
}
