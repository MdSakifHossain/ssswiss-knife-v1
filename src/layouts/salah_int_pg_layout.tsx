// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import NiyatCard from "@/components/app/reusables/NiyatCard";

const SalahIntPgLayout = ({ finalValue }) => {
  const final_value = finalValue;

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
};

export default SalahIntPgLayout;
