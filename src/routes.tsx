import { useRoutes } from "react-router-dom"

import Home from "./pages/Home"
import { Album, AlbumId } from "./pages/Albums"

export const Routes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/albums/', element: <Album /> },
    { path: '/albums/:albumId', element: <AlbumId /> },
    //{ path: '/photos', element: <Photos /> },
    //{ path: '/photos/:photoId', element: <UserPhoto /> },
  ])
}