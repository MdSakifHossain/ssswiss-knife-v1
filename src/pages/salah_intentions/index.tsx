// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import FrameBtn from "@/components/app/reusables/FrameBtn";
import { useLocation } from "react-router";
import { salah_names } from "@/constants/";

export default function SalahIntentionsPage() {
  return (
    <MobileContent
      pageHeading="Salah Intention / Niyat"
      pageDescription="These prayers are obligatory for all Muslims and are a core pillar of Islamic practice."
    >
      <SalahButtonsContainer waqts={salah_names} />
    </MobileContent>
  );
}

function SalahButtonsContainer({ waqts }) {
  const location = useLocation();

  return (
    <div className="flex-1 w-full flex flex-col items-center justify-between">
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
