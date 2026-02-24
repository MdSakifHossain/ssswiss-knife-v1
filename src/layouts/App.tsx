import Header from "@/components/app/layouts/Header";
import { AppConfigProvider } from "@/contexts/appConfig/AppConfigProvider";
import { Outlet } from "react-router";

export default function App() {
  return (
    <AppConfigProvider>
      <InnerApp />
    </AppConfigProvider>
  );
}

function InnerApp() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <div className="flex-1 px-4 py-4 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
