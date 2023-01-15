import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
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

	return <RouterProvider router={router} />;
}

export default App;
