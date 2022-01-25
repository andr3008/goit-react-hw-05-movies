import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import {
	FilmCard,
	Poster,
	DetailsCard,
	FilmTitle,
	DataGenre,
	Data,
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
					src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
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
					<DataGenre>
						{film.genres.map((genre) => (
							<Data key={genre.id}>{genre.name}</Data>
						))}
					</DataGenre>
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
FilmDataCard.propTypes = {
	film: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	),
};
