import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from "../../services/movies-api";
import { AddTitle, ReviewList, ReviewItem, AuthorName } from "./Review.styled";

export default function Reviews() {
	let { filmId } = useParams();
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		moviesAPI.fetchFilmsReviews(filmId).then((r) => {
			setReviews(r.results);
		});
	}, [filmId]);
	return (
		<>
			<AddTitle>Reviews</AddTitle>
			<ReviewList>
				{reviews.length !== 0 ? (
					reviews.map(({ id, author, content }) => (
						<ReviewItem key={id}>
							<AuthorName>Author: {author}</AuthorName>
							<p>{content}</p>
						</ReviewItem>
					))
				) : (
					<p>We haven't had any reviews yet</p>
				)}
			</ReviewList>
		</>
	);
}
