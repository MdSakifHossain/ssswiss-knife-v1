// @ts-nocheck
import GoBackBtn from "../reusables/GoBackBtn";

const MobileContent = ({ goBack = false, className, children }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-4 ${className}`}
    >
      {goBack && <GoBackBtn />}
      {children}
    </div>
  );
};

export default MobileContent;
