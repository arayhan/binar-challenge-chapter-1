import { GET_ALL_MOVIES } from './movie.types';
import { getPopularMovies } from '@/services/movies.service';

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
