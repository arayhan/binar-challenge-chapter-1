import { getAllMovies, searchMovies, setSearchQuery } from '@/store/movie/movie.actions';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { payload, isLoading } = useSelector((state) => state.movie);

	const handleSearch = () => searchMovies();

	useEffect(() => {
		dispatch(getAllMovies());
	}, [dispatch]);

	return (
		<main>
			<section className="bg-slate-800">
				<div className="container py-28">
					<h1 className="text-white text-4xl font-bold">Redux Challenge</h1>
				</div>
			</section>
			<section>
				<div className="container py-12">
					<div className="text-center space-y-3">
						<h1 className="font-bold text-2xl">Products</h1>
						<div className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit soluta culpa iure molestiae quos,
							pariatur dolor sunt nulla incidunt laudantium praesentium? Facere sequi repellat minus, distinctio
							similique provident voluptates.
						</div>
					</div>
					<hr className="my-6" />
					<div className="space-x-3 flex items-center justify-center">
						<input className="w-1/2 rounded-md" type="search" onChange={(e) => setSearchQuery(e.target.value)} />
						<button onClick={handleSearch} className="bg-slate-800 hover:bg-slate-600 text-white px-6 py-2 rounded-md">
							Search
						</button>
					</div>
					<hr className="my-6" />
					{isLoading && <div>Loading...</div>}
					{!isLoading && payload && payload.total_results > 0 && (
						<div className="text-center flex flex-col space-y-3">
							{payload.results.map((movie) => (
								<Link key={movie.id} className="text-blue-500 hover:text-blue-700" to={`/movie/${movie.id}`}>
									{movie.title}
								</Link>
							))}
						</div>
					)}
				</div>
			</section>
		</main>
	);
};
