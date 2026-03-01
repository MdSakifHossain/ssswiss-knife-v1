// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import NiyatCard from "@/components/app/reusables/NiyatCard";
import { salah_intentions } from "@/constants";

export default function FazrNiyatsPage() {
  const { fojor: fojorNiyats } = salah_intentions;

  return (
    <MobileContent
      goBack
      pageHeading="Fajr Salah Niyat"
      pageDescription="4 rakaths (units) = 2 sunnath + 2 fard"
    >
      <div className="w-full grid grid-cols-1 gap-8">
        {fojorNiyats.map((niyat, i) => (
          <NiyatCard niyat={niyat} key={i} />
        ))}
      </div>
    </MobileContent>
  );
}
