import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
// layout and other simple component
import App from "./layouts/App";
import LoadingSpinner from "./components/app/reusables/LoadingSpinner";
// huge sized pages for lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const MultiplicationTableMakerPage = lazy(
  () => import("./pages/MultiplicationTableMakerPage"),
);
const TaraweehCounterPage = lazy(() => import("./pages/TaraweehCounterPage"));
const SalahIntentionsPage = lazy(() => import("./pages/SalahIntentionsPage"));
const FazrNiyatsPage = lazy(
  () => import("./pages/fiveSalahNiyat/FazrNiyatsPage"),
);

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
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <SalahIntentionsPage />
              </Suspense>
            ),
          },
          {
            path: "fazr_niyats",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <FazrNiyatsPage />
              </Suspense>
            ),
          },
        ],
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
