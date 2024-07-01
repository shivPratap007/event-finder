import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
