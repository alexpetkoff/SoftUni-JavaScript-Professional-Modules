import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./routes/RootLayout";
import NewPost, { action as newPost } from "./routes/NewPost";
import PostDetails, {
    loader as postDetailsLoader,
} from "./components/PostDetails";
import Posts, { loader as postsLoader } from "./routes/Posts";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Posts />,
                loader: postsLoader,
                children: [
                    {
                        path: "/create-post",
                        element: <NewPost />,
                        action: newPost,
                    },
                    {
                        path: "/:id",
                        element: <PostDetails />,
                        loader: postDetailsLoader,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
