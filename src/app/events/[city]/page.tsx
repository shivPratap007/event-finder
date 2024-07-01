import EventsList from "@/components/EventsList";
import Heading from "@/components/Heading";
import { EventsType } from "@/lib/Types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventsType[] = await response.json();

  return (
    <>
      <main className="flex flex-col items-center py-24 px-[20px] ">
        <Heading
          text={`Events in ${
            params.city === "all"
              ? "All"
              : params.city.charAt(0).toUpperCase() + params.city.slice(1)
          }`}
        />
        <EventsList events={events} />
      </main>
    </>
  );
}
