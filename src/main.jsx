/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GraphicDesignPage from "./pages/GraphicDesignPage.jsx";
import WebDesignAndDevPage from "./pages/WebDesignAndDevPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
	// {
	// 	path: "/blog",
	// 	element: <BlogPage />,
	// },
	{
		path: "/contact",
		element: <ContactPage />,
	},
	{
		path: "/graphic-design",
		element: <GraphicDesignPage />,
	},
	{
		path: "/web-design-and-development",
		element: <WebDesignAndDevPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
