import { useState, useEffect } from "react";
import * as moviesAPI from "../services/movies-api";
import MoviesList from "../components/MoviesList/MoviesList";
import { Title } from "./HomeView.styled";

export default function HomeView() {
	const [films, setFilms] = useState(null);

	useEffect(() => {
		moviesAPI
			.fetchTrendingFilms()
			.then((r) => r.results)
			.then(setFilms);
	}, []);

	return (
		<>
			<Title>TOP 20 today</Title>
			{films && <MoviesList movies={films} />}
		</>
	);
}
