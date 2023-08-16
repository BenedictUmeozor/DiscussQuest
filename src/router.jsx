import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import {
  CategoryLoader,
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
import ErrorElement from "./pages/ErrorElement";

const Index = lazy(() => import("./pages/Index"));
const Questions = lazy(() => import("./pages/Questions"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const Profile = lazy(() => import("./pages/Profile"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const QuestionPage = lazy(() => import("./pages/QuestionPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const CategoryQuestionsPage = lazy(() =>
  import("./pages/CategoryQuestionsPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Index />
          </Suspense>
        ),
        index: true,
        errorElement: <ErrorElement />,
      },
      {
        path: "logout",
        element: <Logout />,
        errorElement: <ErrorElement />,
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditProfile />
          </Suspense>
        ),
      },
      {
        path: "profile/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserProfile />
          </Suspense>
        ),
        errorElement: <ErrorElement />,
      },
      {
        path: "questions",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Questions />
          </Suspense>
        ),
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/guest",
    element: <GuestLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Index />
          </Suspense>
        ),
        index: true,
        errorElement: <ErrorElement />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorElement />,
      },
      {
        path: "signup",
        element: <Signup />,
        errorElement: <ErrorElement />,
      },
      {
        path: "questions",
        element: <Questions />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/question/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <QuestionPage />
      </Suspense>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "/categories",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryPage />
      </Suspense>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "/categories/:id/:category",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryQuestionsPage />
      </Suspense>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
