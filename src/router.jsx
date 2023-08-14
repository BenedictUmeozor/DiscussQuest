import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import {
  EditProfileLoader,
  IndexLoader,
  ProfileLoader,
  QuestionLoader,
} from "./components/SkeletonLoader";

import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import ErrorPage from "./pages/ErrorPage";

const Index = lazy(() => import("./pages/Index"));
const Questions = lazy(() => import("./pages/Questions"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const Profile = lazy(() => import("./pages/Profile"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const QuestionPage = lazy(() => import("./pages/QuestionPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        element: (
          <Suspense fallback={<IndexLoader />}>
            <Index />
          </Suspense>
        ),
        index: true,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<ProfileLoader />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <Suspense fallback={<EditProfileLoader />}>
            <EditProfile />
          </Suspense>
        ),
      },
      {
        path: "profile/:id",
        element: (
          <Suspense fallback={<ProfileLoader />}>
            <UserProfile />
          </Suspense>
        ),
      },
      {
        path: "questions",
        element: (
          <Suspense fallback={<IndexLoader />}>
            <Questions />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/guest",
    element: <GuestLayout />,
    children: [
      {
        element: (
          <Suspense fallback={<IndexLoader />}>
            <Index />
          </Suspense>
        ),
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
    element: (
      <Suspense fallback={<QuestionLoader />}>
        <QuestionPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
