import { GET_ALL_MOVIES, SET_SEARCH_QUERY } from './movie.types';

const initialState = {
	search: '',
	payload: null,
	isLoading: false,
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_QUERY:
			return {
				...state,
				search: action.payload,
			};
		case GET_ALL_MOVIES:
			return {
				...state,
				isLoading: action.isLoading,
				payload: action.payload || state.payload,
			};
		default:
			return state;
	}
};

export default movieReducer;
