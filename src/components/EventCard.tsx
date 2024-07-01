import { EventsType } from "@/lib/Types";
import Image from "next/image";
import Link from "next/link";


export default function EventCard({ event }: { event: EventsType }) {
  return (
    <Link href={`/event/${event.slug}`}>
      <section className=" hover:scale-105 active:scale-[1.02] transition flex flex-col flex-1 basis-80  h-[300px] relative max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.name}
          height={500}
          width={280}
          className="h-[60%] w-full"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/7 mt-4">By {event.organizerName}</p>
          <p className="text-sm text-white/30 italic">{event.location}</p>
        </div>
        <section className="absolute bg-black/35 rounded-md left-[12px] top-[12px] h-[45px] w-[45px]">
          <p className="text-xl font-bold">
            {new Date(event.date).toLocaleString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
