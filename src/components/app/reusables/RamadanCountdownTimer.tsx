// @ts-nocheck
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { AlertDestructive } from "./AlertDestructive";

// ─── Stuff Happening ───────────────────────────────────────────────────────────

const RAMADAN_START = new Date(2026, 1, 19);
// const RAMADAN_TOTAL_DAYS = 30;

function getDaysPassed() {
  const diffMs = new Date() - RAMADAN_START;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function parseTime(timeStr) {
  const [time, meridiem] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
}

function getTargetDate(timeStr) {
  const { hours, minutes } = parseTime(timeStr);
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    0,
  );
}

function formatNumber(num) {
  return num.toString().padStart(2, "0");
}

export function RamadanTimerCard() {
  const [todaysInfo, setTodaysInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isIftarTime, setIsIftarTime] = useState(true);
  const [periodPct, setPeriodPct] = useState(0);

  const daysPassed = getDaysPassed();

  useEffect(() => {
    axios
      .get("/khulna_ramadan_2026.json")
      .then((res) => setTodaysInfo(res.data.schedule[daysPassed - 1]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!todaysInfo.sehri || !todaysInfo.iftar) return;

    const tick = () => {
      const now = new Date();
      const sehri = getTargetDate(todaysInfo.sehri);
      const iftar = getTargetDate(todaysInfo.iftar);

      let start, target, countingToIftar;

      if (now < sehri) {
        // between yesterday's iftar and today's sehri
        start = new Date(iftar);
        start.setDate(start.getDate() - 1);
        target = sehri;
        countingToIftar = false;
      } else if (now < iftar) {
        // fasting window: sehri → iftar
        start = sehri;
        target = iftar;
        countingToIftar = true;
      } else {
        // between today's iftar and tomorrow's sehri
        start = iftar;
        target = new Date(sehri);
        target.setDate(target.getDate() + 1);
        countingToIftar = false;
      }

      const total = Math.floor((target - now) / 1000);
      const periodTotal = Math.floor((target - start) / 1000);

      setTimeLeft({
        hours: Math.floor(total / 3600),
        minutes: Math.floor((total % 3600) / 60),
        seconds: total % 60,
      });
      setPeriodPct(Math.round(((periodTotal - total) / periodTotal) * 100));
      setIsIftarTime(countingToIftar);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [todaysInfo]);

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertDestructive />;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {isIftarTime ? "Time Until Iftar" : "Time Until Sehri"}
        </CardTitle>
        <CardDescription>
          Sehri: {todaysInfo.sehri} | Iftar: {todaysInfo.iftar}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <div className="text-4xl font-mono font-bold">
          {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-sm text-muted-foreground">
          {isIftarTime ? "🌙 Break your fast soon" : "🌅 Eat before dawn"}
        </div>
        <div className="text-sm text-muted-foreground">{periodPct}% done</div>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground">Ramadan Day {daysPassed}</p>
      </CardFooter>
    </Card>
  );
}
