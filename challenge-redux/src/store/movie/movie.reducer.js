import { GET_ALL_MOVIES } from './movie.types';

const initialState = {
	payload: null,
	isLoading: false,
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
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
