import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => (
	<div className="h-full flex flex-col min-h-screen">
		<Header />
		<Outlet />
	</div>
);

export default Layout;
