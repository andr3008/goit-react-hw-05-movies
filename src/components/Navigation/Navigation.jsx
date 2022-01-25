import { NavLink, Outlet } from "react-router-dom";
import { Nav, NavList, NavListItem } from "./Navigation.styled";

export default function Navigation() {
	return (
		<>
			<Nav>
				<NavList>
					<NavListItem>
						<NavLink
							to="/"
							style={({ isActive }) => ({
								color: isActive ? "#dc0088" : "#2a363b",
								textDecoration: isActive ? "underline" : "none",
							})}
						>
							Home
						</NavLink>
					</NavListItem>
					<NavListItem>
						<NavLink
							to="/movies"
							style={({ isActive }) => ({
								color: isActive ? "#dc0088" : "#2a363b",
								textDecoration: isActive ? "underline" : "none",
							})}
						>
							Movies
						</NavLink>
					</NavListItem>
				</NavList>
			</Nav>
			<Outlet />
		</>
	);
}
