import { useLocation } from "react-router-dom";
import {
	FilmCard,
	Poster,
	DetailsCard,
	FilmTitle,
	Datas,
	DatasTitle,
	AddTitle,
	AddList,
	AddItem,
	LinkStyle,
} from "./FilmDataCard.styled";

export default function FilmDataCard({ film }) {
	const location = useLocation();
	return (
		<>
			<FilmCard>
				<Poster
					src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
					alt="poster"
				/>
				<DetailsCard>
					<FilmTitle>
						{film.original_title} ({film.release_date.slice(0, 4)})
					</FilmTitle>
					<Datas>User Score: {film.vote_average}</Datas>
					<DatasTitle>Overview</DatasTitle>
					<Datas>{film.overview}</Datas>
					<DatasTitle>Genres</DatasTitle>
				</DetailsCard>
			</FilmCard>
			<AddTitle>Additional information</AddTitle>
			<AddList>
				<AddItem>
					<LinkStyle to={`/movies/${film.id}/cast`} state={location.state}>
						Cast
					</LinkStyle>
				</AddItem>
				<AddItem>
					<LinkStyle to={`/movies/${film.id}/reviews`} state={location.state}>
						Reviews
					</LinkStyle>
				</AddItem>
			</AddList>
		</>
	);
}
