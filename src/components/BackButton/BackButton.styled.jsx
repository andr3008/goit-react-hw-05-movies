import styled from "@emotion/styled";

export const Button = styled.button`
	display: inline-block;
	width: auto;
	height: 48px;
	margin-top: 20px;
	margin-bottom: 32px;
	padding-left: 12px;
	padding-right: 12px;
	border: 0;
	opacity: 0.6;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;
	-webkit-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
	&:hover {
		opacity: 1;
	}
`;
export const Label = styled.label`
	font-size: 18px;
	font-weight: 500;
`;
