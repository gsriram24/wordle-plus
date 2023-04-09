import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="sticky top-0 w-full text-center py-4 border-b-2 bg-white">
			<Link to="/" className="inline">
				<h1 className="text-4xl font-bold tracking-tighter cursor-pointer">
					Wordle Plus
				</h1>
			</Link>
		</header>
	);
};

export default Header;
