import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Index from "./pages/Index";
import QuestionPage from "./pages/QuestionPage";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ErrorPage from "./pages/ErrorPage";
import UserProfile from "./pages/UserProfile";
import Questions from "./pages/Questions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        element: <Index />,
        index: true,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "profile/:id",
        element: <UserProfile />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
    ],
  },
  {
    path: "/guest",
    element: <GuestLayout />,
    children: [
      {
        element: <Index />,
        index: true,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
    ],
  },
  {
    path: "/question/:id",
    element: <QuestionPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
