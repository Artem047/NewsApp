import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Business from "../pages/Business";
import Entertainment from "../pages/Entertainment";
import Technology from "../pages/Technology";
import Sports from "../pages/Sports";
import Science from "../pages/Science";

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