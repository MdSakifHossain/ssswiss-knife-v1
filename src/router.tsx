// @ts-nocheck
import { createBrowserRouter } from "react-router";
import App from "./layouts/App";
import HydrateFallbackElement from "./components/app/layouts/HydrateFallbackElement";

const modules = import.meta.glob("./pages/**/*.tsx");

const generateRoutes = () => {
  const routes = [];

  for (const [filePath, loader] of Object.entries(modules)) {
    const path = filePath
      .replace("./pages", "")
      .replace(".tsx", "")
      .replace(/\/index$/, "")
      .toLowerCase();

    // INDEX ROUTE
    if (path === "") {
      routes.push({
        index: true,
        lazy: async () => {
          const mod = await loader();
          return { Component: mod.default };
        },
      });
      continue;
    }

    // 404 ROUTE
    if (path === "/404") {
      routes.push({
        path: "*",
        lazy: async () => {
          const mod = await loader();
          return { Component: mod.default };
        },
      });
      continue;
    }

    routes.push({
      path,
      lazy: async () => {
        const mod = await loader();
        return { Component: mod.default };
      },
    });
  }

  return routes;
};

const generated_routes = generateRoutes();
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    hydrateFallbackElement: <HydrateFallbackElement />,
    children: generated_routes,
  },
]);
