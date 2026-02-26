// @ts-nocheck
import GoBackBtn from "../reusables/GoBackBtn";
import PageHeader from "../reusables/PageHeader";

export default function MobileContent({
  goBack = false,
  pageHeading,
  pageDescription,
  className,
  children,
}) {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-4 ${className}`}
    >
      <GoBack goBack={goBack} />
      <PageHead pageHeading={pageHeading} pageDescription={pageDescription} />
      {children}
    </div>
  );
}

function GoBack({ goBack }) {
  return goBack && <GoBackBtn />;
}

function PageHead({ pageHeading, pageDescription }) {
  return (
    (pageHeading || pageDescription) && (
      <PageHeader heading={pageHeading} description={pageDescription} />
    )
  );
}
