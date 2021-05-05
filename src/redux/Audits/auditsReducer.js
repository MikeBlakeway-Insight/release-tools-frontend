import ACTIONS from '../constants'
const {
	AUDIT__TOGGLE_LOADING,
	AUDIT__ERROR_RETURNED,
	AUDIT__UPDATE_DATA,
	CONFIG__TOGGLE_REFRESH,
	CONFIG__TOGGLE_RELEASED,
	FIXVERSION__UPDATE_SELECTED,
	FIXVERSION__UPDATE_LIST,
	FIXVERSION__TOGGLE_LOADING,
	FIXVERSION__ERROR_RETURNED,
	PROJECTS__UPDATE_SELECTED,
} = ACTIONS

const releaseAudits = {
	audit: {
		loading: false,
		error: '',
		data: [],
	},
	config: {
		showReleased: true,
		refresh: false,
	},
	fixVersions: {
		loading: false,
		error: '',
		list: [],
		selected: '',
	},
	projects: {
		allowed: ['ICARE', 'ITC', 'GNA', 'WKTLO'],
		selected: '',
	},
}

export const reducer = (state = releaseAudits, { payload, type }) => {
	switch (type) {
		case AUDIT__TOGGLE_LOADING:
			return {
				...state,
				audit: {
					...state.audit,
					loading: payload,
				},
			}
		case AUDIT__ERROR_RETURNED:
			return {
				...state,
				audit: {
					...state.audit,
					error: payload,
				},
			}
		case AUDIT__UPDATE_DATA:
			return {
				...state,
				audit: {
					...state.audit,
					data: payload,
				},
			}

		// config
		case CONFIG__TOGGLE_REFRESH:
			return {
				...state,
				config: {
					...state.config,
					refresh: payload,
				},
			}
		case CONFIG__TOGGLE_RELEASED:
			return {
				...state,
				config: {
					...state.config,
					showReleased: payload,
				},
			}

		// fixVersions
		case FIXVERSION__UPDATE_SELECTED:
			return {
				...state,
				fixVersions: {
					...state.fixVersions,
					selected: payload,
				},
			}
		case FIXVERSION__UPDATE_LIST:
			return {
				...state,
				fixVersions: {
					...state.fixVersions,
					list: payload,
				},
			}
		case FIXVERSION__TOGGLE_LOADING:
			return {
				...state,
				fixVersions: {
					...state.fixVersions,
					loading: payload,
				},
			}
		case FIXVERSION__ERROR_RETURNED:
			return {
				...state,
				fixVersions: {
					...state.fixVersions,
					error: payload,
				},
			}

		// projects
		case PROJECTS__UPDATE_SELECTED:
			return {
				...state,
				project: {
					...state.project,
					selected: payload,
				},
			}
		default:
			return state
	}
}

export default reducer
