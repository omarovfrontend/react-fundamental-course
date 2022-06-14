import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  {path: '/', component: <Home /> },
  {path: '/about', component: <About /> },
  {path: '/posts', component: <Posts /> },
  {path: '/posts/:id', component: <PostIdPage />},
  {path: '/login', component: <Navigate to='/posts' />},
  {path: '/error', component: <Error />},
]

export const publicRoutes = [
  {path: '/login', component: <Login /> },
]
