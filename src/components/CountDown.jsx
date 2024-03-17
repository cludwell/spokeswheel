"use client";
import { useEffect, useState } from "react";

export default function CountDown() {
  const targetDate = new Date(2024, 7, 15, 17); // Target date (August 15, 2024)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft,targetDate]);

  function calculateTimeLeft(date) {
    const now = new Date();
    const difference = +date - +now;
    let timeLeft = {};
    if (difference > 0) {
      const months = date.getMonth() - now.getMonth();
      let days = date.getDate() - now.getDate();
      if (days < 0) {
        const dateCopy = new Date(date);
        dateCopy.setMonth(dateCopy.getMonth() - 1);
        const totalDaysLastMonth = new Date(
          dateCopy.getFullYear(),
          dateCopy.getMonth() + 1,
          0
        ).getDate();
        days += totalDaysLastMonth;
      }
      timeLeft = {
        months,
        days,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <>
      <div className="grid grid-flow-col gap-1 text-xs text-center sm:gap-3 md:gap-5 auto-cols-max sm:text-base">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl sm:text-5xl countdown md:text-6xl">
            <span style={{ "--value": timeLeft.months ?? 0 }}></span>
          </span>
          months
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl sm:text-5xl countdown md:text-6xl">
            <span style={{ "--value": timeLeft.days ?? 0 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl sm:text-5xl countdown md:text-6xl">
            <span style={{ "--value": timeLeft.hours ?? 0 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl sm:text-5xl countdown md:text-6xl">
            <span style={{ "--value": timeLeft.minutes ?? 0 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl sm:text-5xl countdown md:text-6xl">
            <span style={{ "--value": timeLeft.seconds ?? 0 }}></span>
          </span>
          sec
        </div>
      </div>
    </>
  );
}
