import PropTypes from "prop-types";

export default function NotFoundView() {
	return <h2>Page not found</h2>;
}
NotFoundView.propTypes = {
	textError: PropTypes.string.isRequired,
};
