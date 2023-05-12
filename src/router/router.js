import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Album from "../pages/Album/Album";
import Artist from "../pages/Artist/Artist";
import Search from "../pages/Search/Search";
import Layout from "../pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Home />,
        //    errorElement: <ErrorPage />,
      },
      {
        path: "album/:albumId/:artistId",
        element: <Album />,
      },
      {
        path: "artist/:artistId",
        element: <Artist />,
      },
      {
        path: "search/:searchItem",
        element: <Search />,
      },
    ],
  },
]);

export default router;
