import styled from "@emotion/styled";

export const Button = styled.button`
	display: inline-block;
	margin-top: 20px;
	margin-bottom: 32px;
	padding: 10px 12px;
	border: 0;
	border-radius: 4px;
	background-color: grey;
	cursor: pointer;
	opacity: 0.6;

	&:hover {
		opacity: 1;
	}
`;
export const Label = styled.label`
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	color: #dc0088;
`;
