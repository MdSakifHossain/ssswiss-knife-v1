// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import NiyatCard from "@/components/app/reusables/NiyatCard";
import { default_fallbacks } from "@/constants";

export default function FazrNiyatsPage() {
  const final_values = default_fallbacks.template_page;

  return (
    <MobileContent
      goBack
      pageHeading={final_values.heading}
      pageDescription={final_values.description}
    >
      <div className="w-full grid grid-cols-1 gap-8">
        {final_values.niyats.map((niyat, i) => (
          <NiyatCard key={i} />
        ))}
      </div>
    </MobileContent>
  );
}
