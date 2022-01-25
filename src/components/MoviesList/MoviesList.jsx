import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { TrendMoviesList, MovieItem, LinkStyle } from "./MovieList.styled";

export default function MoviesList({ movies }) {
	const location = useLocation();
	return (
		<TrendMoviesList>
			{movies.map((movie) => (
				<MovieItem key={movie.id}>
					<LinkStyle to={`/movies/${movie.id}`} state={{ from: location }}>
						{movie.original_title}
					</LinkStyle>
				</MovieItem>
			))}
		</TrendMoviesList>
	);
}
MoviesList.propTypes = {
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	),
};
