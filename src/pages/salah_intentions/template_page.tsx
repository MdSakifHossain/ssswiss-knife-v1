// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import NiyatCard from "@/components/app/reusables/NiyatCard";
import { default_fallbacks } from "@/constants";

export default function FazrNiyatsPage() {
  const final_value = default_fallbacks.template_page;

  return (
    <MobileContent
      goBack
      pageHeading={final_value.heading}
      pageDescription={final_value.description}
    >
      <div className="w-full grid grid-cols-1 gap-8">
        {final_value.niyats.map((niyat, i) => (
          <NiyatCard niyat={niyat} key={i} />
        ))}
      </div>
    </MobileContent>
  );
}
