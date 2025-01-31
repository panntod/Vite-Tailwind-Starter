/* eslint-disable import/no-extraneous-dependencies */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs) {
  return twMerge(clsx(inputs));
}
