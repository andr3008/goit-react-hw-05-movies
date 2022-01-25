import styled from "@emotion/styled";

import { Link } from "react-router-dom";
export const TrendMoviesList = styled.ol`
	list-style-type: decimal;
	list-style-position: inside;
`;
export const MovieItem = styled.li`
	padding-bottom: 8px;
	&::marker {
		color: #2a363b;
		font-size: 20px;
		font-weight: 500;
	}
	&:hover {
		color: #dc0088;
	}
`;
export const LinkStyle = styled(Link)`
	color: #2a363b;
	font-size: 20px;
	font-weight: 500;
	text-decoration: none;
	&:hover,
	&:focus {
		color: #dc0088;
	}
`;
