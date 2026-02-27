// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import FrameBtn from "@/components/app/reusables/FrameBtn";
import { useLocation } from "react-router";

export default function SalahIntentionsPage() {
  const waqts = ["fozor", "zohor", "asor", "magrib", "isha"];

  return (
    <MobileContent
      pageHeading="Salah Intention Page"
      pageDescription="No matter what... Always Complete 5 Times Prayer"
    >
      <SalahButtonsContainer waqts={waqts} />
    </MobileContent>
  );
}

function SalahButtonsContainer({ waqts }) {
  const location = useLocation();

  return (
    <div className="flex-1 mx-auto w-full max-w-xs flex flex-col items-center justify-between">
      <div>
        {waqts.map((w, i) => (
          <FrameBtn
            to={`${location.pathname}/${w}`}
            className="capitalize text-base"
            key={i}
          >
            {w}
          </FrameBtn>
        ))}
      </div>

      <p className="text-sm text-muted-foreground border-t w-full text-center pt-4">
        There's Room for Improvements
      </p>
    </div>
  );
}
