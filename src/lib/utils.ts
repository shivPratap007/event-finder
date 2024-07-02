import clsx, { ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tw-merge";
import { EventType, EventsType } from "./Types";
import { Event, PrismaClient } from "@prisma/client";
import prisma from "./db";
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
    city = Capitalize(city);
    if (city === "All") {
      const allEvents = await prisma.event.findMany();
      if(allEvents.length===0) return null;
      return allEvents;
    }
    const events = await prisma.event.findMany({
      where: {
        city: {
          equals: city,
        },
      },
    });
    if (events.length == 0) return null;
    return events;
  } catch (error) {
    console.log(error);
  }
}
export async function getEvent(city: string) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        slug: city,
      },
    });
    return event;
  } catch (error) {
    console.log(error);
  }
}
