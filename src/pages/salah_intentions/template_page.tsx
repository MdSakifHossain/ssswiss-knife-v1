// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import NiyatCard from "@/components/app/reusables/NiyatCard";

export default function FazrNiyatsPage() {
  const default_fallback = {
    heading: "Salah Page Heading",
    description: "Salah Page Description",
    niyats: new Array(3).fill(null),
  };
  const final_values = default_fallback;

  return (
    <MobileContent
      goBack
      pageHeading={default_fallback.heading}
      pageDescription={default_fallback.description}
    >
      <div className="w-full grid grid-cols-1 gap-8">
        {final_values.niyats.map((niyat, i) => (
          <NiyatCard niyat={niyat} key={i} />
        ))}
      </div>
    </MobileContent>
  );
}
