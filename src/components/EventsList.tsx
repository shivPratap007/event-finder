import { EventsType } from "@/lib/Types";
import EventCard from "./EventCard";
import { getCityEvents, sleep } from "@/lib/utils";
import NotFound from "@/app/not-found";

export default async function EventsList({ city }: { city: string }) {
  const events: EventsType[] | undefined = await getCityEvents(city);

  if (!events) return <div className="w-screen pb-20 flex justify-center items-center text-2xl mt-10">No event found</div>

  return (
    <section className="flex flex-wrap justify-center items-center gap-7 mt-9 px-10">
      {events.map((event: EventsType) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
