import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import PlayScreen from "./screens/PlayScreen";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./screens/Layout";

function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <HomeScreen />,
				},
				{
					path: "/play",
					element: <PlayScreen />,
				},
				{
					path: "*",
					element: <Navigate replace to="/" />,
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
