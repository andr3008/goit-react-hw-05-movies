import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from "../../services/movies-api";
import { Title, CastList } from "./Cast.styled";
import NotFound from "../../image/nope-not-here.webp";

export default function Cast() {
	let { filmId } = useParams();
	const [cast, setCast] = useState([]);
	useEffect(() => {
		moviesAPI.fetchFilmsCredits(filmId).then((r) => {
			setCast(r.cast);
		});
	}, [filmId]);
	return (
		<>
			<Title>Cast</Title>
			<CastList>
				{cast.map(({ id, profile_path, name, character }) => (
					<li key={id}>
						<img
							src={
								profile_path
									? `https://image.tmdb.org/t/p/w300${profile_path}`
									: NotFound
							}
							alt={{ name }}
						/>

						<p>Character: {character}</p>
						<p>{name}</p>
					</li>
				))}
			</CastList>
		</>
	);
}
