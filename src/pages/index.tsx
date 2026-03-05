// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import { RamadanTimerCard } from "@/components/app/reusables/RamadanCountdownTimer";
import { Card, CardContent } from "@/components/ui/card";

export default function Homepage() {
  return (
    <MobileContent className="items-center!">
      <RamadanTimerCard />
      <NewFeaturesCard />
    </MobileContent>
  );
}

function NewFeaturesCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <img className="w-10/12" src="/homepage-img.svg" alt="Greetings" />
        <p className="text-lg font-mono">New Features Coming!</p>
      </CardContent>
    </Card>
  );
}
