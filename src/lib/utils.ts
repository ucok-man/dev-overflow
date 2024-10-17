import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BADGE_CRITERIA } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function matchroute(base: string, target: string): boolean {
  return (base.includes(target) && target.length > 1) || base === target;
}

export function formatTimestamp(timestamp: Date): string {
  const now = new Date();
  const timeDifference = now.getTime() - timestamp.getTime();

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    const seconds = Math.floor(timeDifference / 1000);
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(timeDifference / year);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return num.toString();
  }
}

type CalculateBadgeParam = {
  criteriaInputs: {
    type: keyof typeof BADGE_CRITERIA;
    count: number;
  }[];
};

export function calculateBadge({ criteriaInputs }: CalculateBadgeParam) {
  const badgecounts = {
    GOLD: 0,
    SILVER: 0,
    BRONZE: 0,
  };

  criteriaInputs.forEach((item) => {
    const criterial_rules = BADGE_CRITERIA[item.type];

    Object.keys(criterial_rules).forEach((medal) => {
      if (item.count >= criterial_rules[medal as keyof typeof badgecounts]) {
        badgecounts[medal as keyof typeof badgecounts] += 1;
      }
    });
  });

  return badgecounts;
}

export function formatdate(date: Date): string {
  // Extract the month and year from the Date object
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Create the joined date string (e.g., "September 2023")
  const joinedDate = `${month} ${year}`;

  return joinedDate;
}
