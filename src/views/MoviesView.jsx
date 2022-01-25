
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import * as moviesAPI from "../services/movies-api";
import SearchBar from "../components/SearchBar/SearchBar";
import MoviesList from "../components/MoviesList/MoviesList";

export default function MoviesView() {
	const [query, setQuery] = useState("");
	const [searched, setSearched] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const search = searchParams.get("query");
	useEffect(() => {
		if (query === "") {
			return;
		}
		moviesAPI
			.fetchSearchingFilms(query)
			.then((r) => r.results)
			.then(setSearched);
	}, [query]);

	useEffect(() => {
		if (search === null) {
			return;
		}
		moviesAPI
			.fetchSearchingFilms(search)
			.then((r) => r.results)
			.then(setSearched);
	}, [search]);

	const handleFormSubmit = (keyWord) => {
		setQuery(keyWord);
		navigate({ ...location, search: `query=${keyWord}` });
	};
	return (
		<>
			<SearchBar onSubmit={handleFormSubmit} />
			{searched && <MoviesList movies={searched} />}
		</>
	);
}
