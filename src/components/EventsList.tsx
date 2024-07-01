import { EventsType } from "@/lib/Types";
import EventCard from "./EventCard";

export default function EventsList({events}:{events:EventsType[]}) {
  return (
    <section className="flex flex-wrap justify-center items-center gap-7 mt-9 px-10">
        {
            events.map((event:EventsType)=>(
                <EventCard key={event.id} event={event} />
            ))
        }
    </section>
  )
}
