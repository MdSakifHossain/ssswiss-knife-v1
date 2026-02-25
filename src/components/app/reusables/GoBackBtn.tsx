// @ts-nocheck
import { Button } from "@/components/ui/button";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router";

const GoBackBtn = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <Button
      className={`rounded-full ${className}`}
      size="sm"
      onClick={() => navigate(-1)}
    >
      <HugeiconsIcon icon={ArrowLeft02Icon} />
      Go Back
    </Button>
  );
};

export default GoBackBtn;
