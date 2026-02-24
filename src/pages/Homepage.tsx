// @ts-nocheck

import MobileContent from "@/components/app/layouts/MobileContent";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";

export default function Homepage() {
  return (
    <MobileContent>
      <HugeiconsIcon icon={Home07Icon} className="size-6" />

      <p className="font-mono">Hola my niggas</p>
    </MobileContent>
  );
}
