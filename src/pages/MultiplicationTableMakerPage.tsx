// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Refresh01Icon, ZapIcon } from "@hugeicons/core-free-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageHeader from "@/components/app/reusables/PageHeader";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";

export default function MultiplicationTableMakerPage() {
  const [base, setBase] = useState(1);
  const [maxMultiplier, setMaxMultiplier] = useState(10);
  const defaults = {
    base: 1,
    maxMultiplier: 10,
  };

  return (
    <MobileContent>
      <PageHeader
        heading="Multiplication Table Generator"
        description="Just Write it down and it will do the job."
      />

      <TopCard title="Stats">
        <div className="text-sm flex flex-col gap-2">
          <StatRow v1="Base" v2={base} />
          <StatRow v1="Max Multiplier" v2={maxMultiplier} />
        </div>
        <Dwawer
          base={base}
          setBase={setBase}
          maxMultiplier={maxMultiplier}
          setMaxMultiplier={setMaxMultiplier}
          defaults={defaults}
        />
      </TopCard>

      <MultiplierCard base={base} maxMultiplier={maxMultiplier} />
    </MobileContent>
  );
}

function StatRow({ v1 = "Key", v2 = "Value" }) {
  return (
    <div className="flex items-center justify-between">
      <span>{v1}:</span>
      <span className="font-semibold">{v2}</span>
    </div>
  );
}

function TopCard({ title = "Title of the Card", children }) {
  return (
    <Card size="sm" className="relative mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle className="font-black">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">{children}</CardContent>
    </Card>
  );
}

function Dwawer({ base, setBase, maxMultiplier, setMaxMultiplier, defaults }) {
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);

  const handleDrawerReset = () => {
    setBase(defaults.base);
    setMaxMultiplier(defaults.maxMultiplier);
    closeDrawer();
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className="absolute top-0 right-0 rounded-full"
          variant="ghost"
          size="icon"
        >
          <HugeiconsIcon icon={ZapIcon} className="size-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-base">Change Values</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">
            <FieldSet className="w-full max-w-xs">
              <FieldGroup>
                <Field>
                  <FieldLabel>Base Number</FieldLabel>
                  <Input
                    type="number"
                    value={base}
                    onChange={(e) =>
                      setBase(Math.max(0, Number(e.target.value)))
                    }
                    placeholder="Base Number"
                    className="py-5 px-5"
                  />
                </Field>

                <Field className="w-full max-w-xs">
                  <FieldLabel>
                    Max Multiplier
                    <Badge variant="secondary" className="ml-auto">
                      {maxMultiplier}
                    </Badge>
                  </FieldLabel>
                  <Slider
                    value={maxMultiplier}
                    onValueChange={(value) => setMaxMultiplier(value)}
                    max={30}
                    min={5}
                    step={1}
                    className="mt-2 w-full"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>

          <DrawerFooter className="grid grid-cols-2">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleDrawerReset()}
            >
              <HugeiconsIcon icon={Refresh01Icon} />
              Reset
            </Button>
            <DrawerClose asChild>
              <Button size="lg" variant="secondary">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MultiplierCard({ base, maxMultiplier }) {
  return (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardContent className="flex flex-col gap-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-black">Problem</TableHead>
              <TableHead className="text-right font-black">Solution</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(maxMultiplier)].map((_, i) => (
              <TableRow key={i} className="text-xl">
                <TableCell>
                  {base} x {i + 1}
                </TableCell>
                <TableCell className="text-end">{base * (i + 1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
