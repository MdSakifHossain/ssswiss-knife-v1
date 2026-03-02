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
    <div className="flex-1 w-full flex flex-col items-center justify-center">
      <div>
        {waqts.map((waqt, i) => (
          <FrameBtn
            to={`${location.pathname}/${waqt}`}
            className="capitalize text-base"
            key={i}
          >
            {waqt}
          </FrameBtn>
        ))}
      </div>
    </div>
  );
}
