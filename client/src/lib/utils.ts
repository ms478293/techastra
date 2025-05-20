import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TecAstra theme colors
export const THEME = {
  colors: {
    teal: "rgb(0, 133, 155)",
    gold: "rgb(229, 168, 35)",
    darkblue: "rgb(13, 45, 74)",
    gray: "rgb(245, 247, 250)",
    darkgray: "rgb(100, 116, 139)"
  }
};
