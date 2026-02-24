// @ts-nocheck

const MobileContent = ({ className, children }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default MobileContent;
