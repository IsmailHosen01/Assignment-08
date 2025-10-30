import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/HomeApps.json'),
                hydrateFallbackElement: <div className="flex items-center justify-center min-h-screen">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>,
                path: '/',
                Component: Home,

            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installed-apps',
                Component: Installation
            }
        ]
    },
]);