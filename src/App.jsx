import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './components/pages/MainPage.jsx'
//import { UserProvider } from "./contexts/UserContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/controls/Error.jsx";
import TareasPage from './components/pages/TareasPage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';

const routes = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
		errorElement: <Error />,
	},
	{
		path: "/tareas",
		element: <TareasPage />,
		errorElement: <Error />,
	},
	{
		path: "/about",
		element: <AboutPage />,
		errorElement: <Error />,
	},
]);
  


createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* <UserProvider> */}
			<RouterProvider router={routes} />
		{/* </UserProvider> */}
	</StrictMode>,
)
