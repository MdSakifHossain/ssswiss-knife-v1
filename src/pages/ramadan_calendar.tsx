// @ts-nocheck
import MobileContent from "@/components/app/layouts/MobileContent";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LoadingSpinner from "@/components/app/reusables/LoadingSpinner";
import { AlertDestructive } from "@/components/app/reusables/AlertDestructive";
import { HugeiconsIcon } from "@hugeicons/react";
import { Ramadhan01Icon } from "@hugeicons/core-free-icons";

export default function RamadanCalendar() {
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/khulna_ramadan_2026.json");
        setCalendar(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MobileContent
      pageHeading="Ramadan Calendar"
      pageDescription={calendar?.note}
    >
      {loading && <LoadingSpinner />}
      {error && <AlertDestructive />}
      {calendar && <RamadanTable calendar={calendar} />}
    </MobileContent>
  );
}

function RamadanTable({ calendar }) {
  const [showAll, setShowAll] = useState(false);

  const ramadanStart = new Date(2026, 1, 19);
  const today = new Date();
  const diffTime = today - ramadanStart;
  const todayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

  let startIndex, endIndex;
  if (todayIndex <= 10) {
    startIndex = 1;
    endIndex = 10;
  } else if (todayIndex <= 20) {
    startIndex = 11;
    endIndex = 20;
  } else {
    startIndex = 21;
    endIndex = 30;
  }

  const finalItems = showAll
    ? calendar.schedule
    : calendar.schedule.slice(startIndex - 1, endIndex);

  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <Table className="font-mono">
        <TableCaption>Khulna Calendar {calendar?.year}</TableCaption>

        <TableHeader>
          <TableRow className="*:border-border [&>:not(:last-child)]:border-r *:text-center">
            <TableHead onClick={() => setShowAll((prev) => !prev)}>
              <HugeiconsIcon
                className="size-4.5"
                strokeWidth={2.25}
                icon={Ramadhan01Icon}
              />
            </TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Sehri</TableHead>
            <TableHead>Iftar</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {finalItems?.map((item) => (
            <TableRow
              key={item.index}
              className={`*:border-border [&>:not(:last-child)]:border-r text-center ${item.index === todayIndex && "text-primary bg-primary/10"}`}
            >
              <TableCell>{item.index.toString().padStart(2, "0")}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.sehri}</TableCell>
              <TableCell>{item.iftar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
