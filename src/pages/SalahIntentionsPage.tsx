// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import FrameBtn from "@/components/app/reusables/FrameBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SalahIntentionsPage() {
  const waqts = ["fazr", "zohr", "asr", "magrib", "isha"];

  return (
    <MobileContent
      pageHeading="Salah Intention Page"
      pageDescription="No matter what, Always Complete 5 Times Prayer"
    >
      <SalahButtonsContainer waqts={waqts} />
    </MobileContent>
  );
}

function SalahButtonsContainer({ waqts }) {
  return (
    <Card className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>All Five Prayer Time</CardTitle>
        <CardDescription>
          Jump on any Time Period by Clicking on.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {waqts.map((w, i) => (
          <FrameBtn
            to={`/salah_intentions/${w}`}
            className="capitalize text-base"
            key={i}
          >
            {w}
          </FrameBtn>
        ))}
      </CardContent>

      <CardFooter className="border-t text-xs text-muted-foreground flex justify-center">
        There's Room for Improvements.
      </CardFooter>
    </Card>
  );
}
