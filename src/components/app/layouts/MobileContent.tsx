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
      {goBack && <GoBackBtn />}
      {(pageHeading || pageDescription) && (
        <PageHeader heading={pageHeading} description={pageDescription} />
      )}

      {children}
    </div>
  );
}
