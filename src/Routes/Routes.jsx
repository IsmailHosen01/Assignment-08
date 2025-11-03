import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppErrorPage from "../pages/AppErrorPage/AppErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/AllApps.json'),
                hydrateFallbackElement: <div className="flex items-center justify-center min-h-screen">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>,
                path: '/',
                Component: Home,
            },
            {
                path: '/apps',
                loader: () => fetch('/AllApps.json'),
                hydrateFallbackElement: <div className="flex items-center justify-center min-h-screen">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>,
                Component: Apps
            },
            {
                path: '/app-details/:id',
                loader: () => fetch('/AllApps.json'),
                hydrateFallbackElement: <div className="flex items-center justify-center min-h-screen">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>,
                errorElement: <AppErrorPage></AppErrorPage>,
                Component: AppDetails
            },
            {
                path: '/installed-apps',
                Component: Installation
            }
        ]
    },
]);