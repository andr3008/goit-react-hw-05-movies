import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from "../../services/movies-api";
import { Title, CastList } from "./Cast.styled";

export default function Cast() {
	let { filmId } = useParams();
	const [cast, setCast] = useState([]);
	useEffect(() => {
		moviesAPI.FetchFilmsCredits(filmId).then((r) => {
			setCast(r.cast);
		});
	}, [filmId]);
	return (
		<>
			<Title>Cast</Title>
			<CastList>
				{cast.map(({ id, profile_path, name, character }) => (
					<li key={id}>
						{profile_path ? (
							<img
								src={`https://image.tmdb.org/t/p/w300${profile_path}`}
								alt={{ name }}
							/>
						) : (
							<img
								src={"../../image/nope-not-here.webp"}
								alt={"No poster"}
								width={300}
							/>
						)}
						<p>Character: {character}</p>
						<p>{name}</p>
					</li>
				))}
			</CastList>
		</>
	);
}
