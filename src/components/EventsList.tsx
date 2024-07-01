import { EventsType } from "@/lib/Types";
import EventCard from "./EventCard";
import { sleep } from "@/lib/utils";

export default async function EventsList({ city }: { city: string }) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventsType[] = await response.json();
  return (
    <section className="flex flex-wrap justify-center items-center gap-7 mt-9 px-10">
      {events.map((event: EventsType) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
