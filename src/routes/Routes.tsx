import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Business from "../pages/category/Business";
import Entertainment from "../pages/category/Entertainment";
import Technology from "../pages/category/Technology";
import Sports from "../pages/category/Sports";
import Science from "../pages/category/Science";
import RouteNewsCard from "../components/RouteNewsCard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home  />,
            },
            {
                path: '/:news',
                element: <RouteNewsCard />
            },
            {
                path: '/business',
                element: <Business />
            },
            {
                path: '/entertainment',
                element: <Entertainment />,
            },
            {
                path: '/technology',
                element: <Technology />
            },
            {
                path: '/sports',
                element: <Sports />,
            },
            {
                path: '/science',
                element: <Science />
            }
        ]
    }
])