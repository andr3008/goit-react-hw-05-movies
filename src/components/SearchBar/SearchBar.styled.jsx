import styled from "@emotion/styled";

export const SearchForm = styled.form`
	display: flex;
	margin-top: 20px;
	margin-bottom: 32px;
	margin-right: auto;
	align-items: center;
	width: 100%;
	max-width: 600px;
	background-color: #fff;
	border-radius: 3px;
	overflow: hidden;
	-webkit-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);
`;
export const SearchFormButton = styled.button`
	display: inline-block;
	width: 48px;
	height: 48px;
	border: 0;
	opacity: 0.6;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;
	&:hover {
		opacity: 1;
	}
`;
export const SearchFormButtonLabel = styled.span`
	position: absolute;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	clip-path: inset(50%);
	border: 0;
`;
export const SearchFormInput = styled.input`
	display: inline-block;
	font: inherit;
	font-size: 20px;
	border: none;
	outline: none;
	padding-left: 4px;
	padding-right: 4px;
	&::placeholder {
		font: inherit;
		font-size: 18px;
	}
`;
