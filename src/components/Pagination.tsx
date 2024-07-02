import { PAGE_SIZE } from "@/lib/consts";
import { cn, getAllEventsOfCity } from "@/lib/utils";
import Link from "next/link";


export default async function Pagination({
  city,
  page,
}: {
  city: string;
  page: number;
}) {
  const events = await getAllEventsOfCity(city);
  const eventLength = events?.length;
  const totalPages = Math.floor(eventLength! / PAGE_SIZE) + 1;

  if (!events) return null;
  return (
    <section className=" w-full flex justify-center items-center gap-20">
      <Link
        href={`/events/${city}?page=${page !== 1 ? page - 1 : page}`}
        className={cn(
          "text-white px-5 py-3 bg-white/5",
          {
            "text-white/50 pointer-events-none	:": page === 1,
          },
          {
            "text-white": page !== 1,
          }
        )}
      >
        Prev
      </Link>
      <Link
        href={`/events/${city}?page=${page < totalPages ? page + 1 : page}`}
        className={cn(
          "text-white px-5 py-3 bg-white/5",
          {
            "text-white/50  pointer-events-none	:": page >= totalPages,
          },
          {
            "text-white": page < totalPages,
          }
        )}
      >
        Next
      </Link>
    </section>
  );
}
