import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import * as moviesAPI from "../services/movies-api";
import BackButton from "../components/BackButton/BackButton";

const FilmDataCard = lazy(() =>
	import("../components/FilmDataCard/FilmDataCard.jsx")
);
export default function FilmDetailsView() {
	const location = useLocation();
	const { filmId } = useParams();
	const [film, setFilm] = useState(null);

	useEffect(() => {
		moviesAPI.fetchFilmsDetails(filmId).then((r) => setFilm(r));
	}, [filmId]);

	return (
		<>
			<BackButton location={location} />
			<Suspense fallback={<h4>Loading film-data</h4>}>
				{film && <FilmDataCard film={film} />}
			</Suspense>
			<Outlet />
		</>
	);
}
