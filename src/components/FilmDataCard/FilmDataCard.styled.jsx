import styled from "@emotion/styled";

import { Link } from "react-router-dom";
export const FilmCard = styled.div`
	display: flex;
	margin-bottom: 20px;
`;
export const Poster = styled.img`
	border-radius: 5px;
	-webkit-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
`;
export const DetailsCard = styled.div`
	margin-left: 18px;
`;
export const FilmTitle = styled.h2`
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 30px;
`;
export const Datas = styled.p`
	margin-bottom: 20px;
`;
export const DatasTitle = styled.h3`
	margin-bottom: 20px;
	font-size: 25px;
`;
export const AddTitle = styled.h4`
	margin-bottom: 20px;
	font-size: 22px;
`;
export const AddList = styled.ul`
	margin-bottom: 20px;
	list-style-position: inside;
`;
export const AddItem = styled.li`
	margin-bottom: 12px;
	font-size: 18px;
`;
export const LinkStyle = styled(Link)`
	color: #2a363b;
	font-size: 20px;
	font-weight: 400;
	text-decoration: none;
	&:hover,
	&:focus {
		color: #dc0088;
	}
`;
