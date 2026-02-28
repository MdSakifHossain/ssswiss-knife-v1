// @ts-nocheck
import { Button as WarButton } from "@/components/ui/warcraftcn/button";
import { Link } from "react-router";

const CrystalBtn = ({ to, className = "", children, ...props }) => {
  return (
    <Link to={to} className="w-full">
      <WarButton className={`w-full py-5 px-10 ${className}`} {...props}>
        {children}
      </WarButton>
    </Link>
  );
};

export default CrystalBtn;
