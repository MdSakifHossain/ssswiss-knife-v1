// @ts-nocheck

import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <PageLayout>
      <TopPart />
      <BottomPart />
    </PageLayout>
  );
}

function PageLayout({ children }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8">
      {children}
    </div>
  );
}

function TopPart() {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src="/page-not-found.svg" alt="Not Found" className="w-3/12" />
      <h2 className="text-2xl font-medium">Page Not Found</h2>
    </div>
  );
}

function BottomPart() {
  return (
    <Link to="/">
      <Button variant="secondary">Back to Homepage</Button>
    </Link>
  );
}
