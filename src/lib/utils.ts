import clsx, { ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tw-merge";
import { EventType, EventsType } from "./Types";
import { Event, PrismaClient } from "@prisma/client";
import prisma from "./db";
import Link from "next/link";
import { PAGE_SIZE } from "./consts";
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

export async function getCityEvents(city: string, page: number = 1) {
  try {
    city = Capitalize(city);

    const events = await prisma.event.findMany({
      where: {
        city: city === "All" ? undefined : city,
      },
      orderBy: {
        date: "asc",
      },
      take: PAGE_SIZE,
      skip: (page - 1) * 6,
    });
    if (events.length == 0) return undefined;
    return events;
  } catch (error) {
    console.log(error);
  }
}
export async function getAllEventsOfCity(city: string) {
  try {
    city = Capitalize(city);

    const events = await prisma.event.findMany({
      where: {
        city: city === "All" ? undefined : city,
      },
    });
    if (events.length == 0) return undefined;
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


