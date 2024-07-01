import EventsList from "@/components/EventsList";
import Heading from "@/components/Heading";
import { EventsType } from "@/lib/Types";
import { Suspense } from "react";
import AllEventsLoading from "./loading";
import { Metadata } from "next";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export async function generateMetadata({ params }: EventsPageProps) {
  const city = params.city;
  console.log(city);
  if (city === "all") {
    return {
      title: `All Events`,
    };
  }
  return {
    title: `Events in ${city}`,
  };
}

export default async function EventsPage({ params }: EventsPageProps) {
  return (
    <>
      <main className="flex flex-col items-center py-24 px-[20px] ">
        <Heading
          text={`${
            params.city === "all" ? "All Events" : `Events in ${params.city}`
          }`}
        />
        <Suspense fallback={<AllEventsLoading />}>
          <EventsList city={params.city} />
        </Suspense>
      </main>
    </>
  );
}
