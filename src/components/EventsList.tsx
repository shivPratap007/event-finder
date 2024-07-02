import { EventsType } from "@/lib/Types";
import EventCard from "./EventCard";
import { getCityEvents, sleep } from "@/lib/utils";
import Pagination from "./Pagination";

export default async function EventsList({ city,page }: { city: string ,page:number}) {
  const events: EventsType[] | undefined = await getCityEvents(city,page);

  if (!events) return <div className="w-screen pb-20 flex justify-center items-center text-2xl mt-10">No event found</div>

  return (
    <>
    <section className="flex flex-wrap justify-center items-center gap-7 mt-9 px-10 mb-10">
      {events.map((event: EventsType) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
    <Pagination city={city} page={page}/>
    </>
  );
}
