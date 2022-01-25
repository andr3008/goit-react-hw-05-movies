import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from "../../services/movies-api";
import { AddTitle, ReviewList, ReviewItem } from "./Review.styled";

export default function Reviews() {
	let { filmId } = useParams();
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		moviesAPI.FetchFilmsReviews(filmId).then((r) => {
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
							<p>Author: {author}</p>
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
