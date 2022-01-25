import { ContainerBox } from "./Container.styled";
import PropTypes from "prop-types";

export default function Container({ children }) {
	return <ContainerBox>{children}</ContainerBox>;
}
Container.propTypes = {
	children: PropTypes.node.isRequired,
};
