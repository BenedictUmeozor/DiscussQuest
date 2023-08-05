import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Index from "./pages/Index";
import QuestionPage from "./pages/QuestionPage";
import Profile from "./pages/Profile";

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
        path: 'profile',
        element: <Profile />
      }
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
    ],
  },
  {
    path: "/question/:id",
    element: <QuestionPage />,
  },
]);

export default router;
