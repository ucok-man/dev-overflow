import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function matchroute(base: string, target: string): boolean {
  return (base.includes(target) && base.length > 1) || base === target;
}
