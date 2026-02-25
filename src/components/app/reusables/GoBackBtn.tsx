// @ts-nocheck
import { Button } from "@/components/ui/button";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router";

const GoBackBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Button className="rounded-full" size="sm" onClick={() => navigate(-1)}>
        <HugeiconsIcon icon={ArrowLeft02Icon} />
        Go Back
      </Button>
    </div>
  );
};

export default GoBackBtn;
