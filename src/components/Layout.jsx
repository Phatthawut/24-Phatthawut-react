import { Link, Outlet } from "react-router-dom";

function Layout() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/owner">Owner</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}
export default Layout;
