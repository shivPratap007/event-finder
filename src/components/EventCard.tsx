import { EventsType } from "@/lib/Types";
import Image from "next/image";

export default function EventCard({event}:{event:EventsType}) {
  return (
    <section className="flex flex-col flex-1 basis-80  h-[300px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden" >
        <Image src={event.imageUrl} alt={event.name} height={500} width={280} className="h-[60%] w-full"/>
        <div className="flex flex-col flex-1 justify-center items-center">
            <h2 className="text-2xl font-semibold">{event.name}</h2>
            <p className="italic text-white/75 mt-4">By {event.organizerName}</p>
            <p>{event.location}</p>
        </div>
    </section>
  )
}
