// @ts-nocheck

import MobileContent from "@/components/app/layouts/MobileContent";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";

export default function Homepage() {
  return (
    <MobileContent className="items-center! justify-center!">
      <HugeiconsIcon icon={Home07Icon} strokeWidth={1} className="size-16" />
    </MobileContent>
  );
}
