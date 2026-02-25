// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import CrystalBtn from "@/components/app/reusables/CrystalBtn";
import PageHeader from "@/components/app/reusables/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ZapIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

export default function TaraweehCounterPage() {
  return (
    <MobileContent>
      <PageHeader
        heading="Taraweeh Counter"
        description="Keep going and keep doing the good deeds."
      />

      <TaraweehCard />
    </MobileContent>
  );
}

function TaraweehCard() {
  const defaults = {
    count: 0,
    maxCount: 20,
  };

  // if any number is saved previously
  // then convert it to base10
  // and then return it. Otherwise return 0
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("taraweehCount");
    return saved ? parseInt(saved, 10) : defaults.count;
  });

  const handleCounterReset = () => setCount(defaults.count);

  useEffect(() => {
    localStorage.setItem("taraweehCount", count.toString());
  }, [count]);

  return (
    <Card size="sm" className="mx-auto w-full max-w-xs flex-1 relative">
      <CardContent className="flex-1 flex flex-col items-center justify-center gap-8">
        {count === defaults.maxCount ? (
          <p className={`text-3xl`}>✨ Congrats 🥳✨</p>
        ) : (
          <p
            className={`text-8xl font-mono ${count === defaults.maxCount && "text-foreground/40"}`}
          >
            {count}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {count < defaults.maxCount && (
          <CrystalBtn
            disabled={count === defaults.maxCount}
            onClick={() =>
              setCount((prev) => {
                if (prev < defaults.maxCount) {
                  return prev + 2;
                }
                return prev;
              })
            }
          >
            Add +2
          </CrystalBtn>
        )}
      </CardFooter>
      <Button
        className="absolute top-0 right-0 rounded-full"
        size="icon-lg"
        variant="ghost"
        onClick={() => handleCounterReset()}
        hidden={count !== defaults.maxCount}
      >
        <HugeiconsIcon icon={ZapIcon} className="size-5" />
      </Button>
    </Card>
  );
}
