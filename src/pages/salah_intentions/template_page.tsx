// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import NiyatCard from "@/components/app/reusables/NiyatCard";

export default function FazrNiyatsPage() {
  const default_fallbacks = new Array(3).fill(null);
  const final_values = default_fallbacks;

  return (
    <MobileContent goBack pageHeading="Heading" pageDescription="Description">
      <div className="w-full grid grid-cols-1 gap-8">
        {final_values.map((niyat, i) => (
          <NiyatCard niyat={niyat} key={i} />
        ))}
      </div>
    </MobileContent>
  );
}
