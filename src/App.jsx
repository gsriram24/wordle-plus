import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import PlayScreen from "./screens/PlayScreen";

function App() {
	const router = createBrowserRouter([
		{
			path: "play",
			element: <PlayScreen />,
		},
		{
			path: "*",
			element: <Navigate replace to="/play?size=5" />,
		},
	]);

	return (
		<>
			<Header />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
