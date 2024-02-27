import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Category from "../components/Category";
import Contact from "../components/Contact";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/category',
                element: <Category />,
            },
            {
                path: '/contact',
                element: <Contact />,
            }
        ]
    }
])