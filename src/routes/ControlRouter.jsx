import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

const Loading = lazy(() => import("../pages/loading/LoadingPage"));
const Protected = lazy(() => import("./middlewares/Protected"));
const Public = lazy(() => import("./middlewares/Public"));
const Home = lazy(() => import("../pages/home/HomePage"));
const Task = lazy(() => import("../pages/tasks/TaskPage"));
const TaskDetail = lazy(() => import("../pages/tasks/TaskDetail"));
const Profile = lazy(() => import("../pages/profile/ProfilePage"));
const Login = lazy(() => import("../pages/auth/LoginPage"));
const Dashboard = lazy(() => import("../pages/dashboard/DasboardPage"));
const Register = lazy(() => import("../pages/auth/RegisterPage"));
const NotFound = lazy(() => import("../pages/404/NotFoundPage"));

export const ControlRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="login"
              element={
                <Public>
                  <Login />
                </Public>
              }
            />
            <Route
              path="dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="task"
              element={
                <Protected>
                  <Task />
                </Protected>
              }
            />
            <Route
              path="task/:taskId"
              element={
                <Protected>
                  <TaskDetail />
                </Protected>
              }
            />
            <Route
              path="profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route
              path="register"
              element={
                <Public>
                  <Register />
                </Public>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};
