import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
	return (
		<div>
			<nav>
				<NavLink to="home" className={styles.link}>
					Home
				</NavLink>

				<NavLink to="movies" className={styles.link}>
					Movies
				</NavLink>
			</nav>
			<Outlet />
		</div>
	);
};

export default Navigation;
