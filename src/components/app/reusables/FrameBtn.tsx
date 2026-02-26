// @ts-nocheck
import { Button as WarButton } from "@/components/ui/warcraftcn/button";
import { Link } from "react-router";

const FrameBtn = ({ to, className = "", children, ...props }) => {
  return (
    <Link to={to} className="w-full">
      <WarButton
        variant="frame"
        className={`w-full md:w-auto py-7 px-10 ${className}`}
        {...props}
      >
        {children}
      </WarButton>
    </Link>
  );
};

export default FrameBtn;
