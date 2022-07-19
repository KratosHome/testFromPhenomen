import {MainPage, PhotosPage} from "../pages";

export const ProviderRouter: any[] = [
    {path: "/", component: <MainPage/>},
    {path: "/:id", component: <PhotosPage/>},
];
