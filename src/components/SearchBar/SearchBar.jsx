import PropTypes from "prop-types";
import { useState } from "react";
import {
	SearchForm,
	SearchFormButton,
	SearchFormButtonLabel,
	SearchFormInput,
} from "./SearchBar.styled";
import { BiSearch } from "react-icons/bi";

export default function Searchbar({ onSubmit }) {
	const [keyWord, setKeyWord] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (keyWord.trim() === "") {
			return;
		}
		onSubmit(keyWord);
	};
	const handleKeyWordChange = (e) => {
		setKeyWord(e.currentTarget.value.toLowerCase());
	};
	return (
		<>
			<SearchForm onSubmit={handleSubmit}>
				<SearchFormButton type="submit">
					<BiSearch />
					<SearchFormButtonLabel>Search</SearchFormButtonLabel>
				</SearchFormButton>

				<SearchFormInput
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search movies"
					onChange={handleKeyWordChange}
				/>
			</SearchForm>
		</>
	);
}
Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
