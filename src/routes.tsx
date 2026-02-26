import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

import App from "./layouts/App";
import LoadingSpinner from "./components/app/reusables/LoadingSpinner";
import SalahIntentionsPage from "./pages/SalahIntentionsPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const MultiplicationTableMakerPage = lazy(
  () => import("./pages/MultiplicationTableMakerPage"),
);
const TaraweehCounterPage = lazy(() => import("./pages/TaraweehCounterPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "multiplication_table",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MultiplicationTableMakerPage />
          </Suspense>
        ),
      },
      {
        path: "taraweeh_counter",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TaraweehCounterPage />
          </Suspense>
        ),
      },
      {
        path: "salah_intentions",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SalahIntentionsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: App,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
