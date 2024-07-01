import clsx, { ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tw-merge";
import { EventType, EventsType } from "./Types";
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export async function sleep(ms: number): Promise<Metadata> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function Capitalize(text: string): string {
  text = text.split("-").join(" ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function getCityEvents(city: string) {
  try {
    const response = await fetch(
      `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );
    const events: EventsType[] = await response.json();
    return events;
  } catch (error) {
    console.log(error);
  }
}
export async function getEvent(city: string) {
  try {
    const response = await fetch(
      `https://bytegrad.com/course-assets/projects/evento/api/events/${city}`
    );
    const event: EventType = await response.json();
    return event;
  } catch (error) {
    console.log(error);
  }
}
