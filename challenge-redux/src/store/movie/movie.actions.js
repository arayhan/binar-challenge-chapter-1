import { GET_ALL_MOVIES, SET_SEARCH_QUERY } from './movie.types';
import { getPopularMovies, getMoviesByTitle } from '@/services/movies.service';

export const getAllMovies = () => async (dispatch) => {
	dispatch({
		type: GET_ALL_MOVIES,
		isLoading: true,
	});

	try {
		const response = await getPopularMovies();

		dispatch({
			type: GET_ALL_MOVIES,
			isLoading: false,
			payload: response.payload,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_MOVIES,
			isLoading: false,
			payload: null,
		});
	}
};

export const setSearchQuery = (query) => async (dispatch) => {
	dispatch({ type: SET_SEARCH_QUERY, payload: query });
};

export const searchMovies = () => async (dispatch) => {
	dispatch({
		type: GET_ALL_MOVIES,
		isLoading: true,
	});

	try {
		const response = await getMoviesByTitle();

		dispatch({
			type: GET_ALL_MOVIES,
			isLoading: false,
			payload: response.payload,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_MOVIES,
			isLoading: false,
			payload: null,
		});
	}
};
