import EventsList from "@/components/EventsList";
import Heading from "@/components/Heading";
import { Suspense } from "react";
import AllEventsLoading from "./loading";
import { Capitalize } from "@/lib/utils";
import { z } from "zod";
import NotFound from "@/app/not-found";

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}) {
  const city = params.city;
  if (city === "all") {
    return {
      title: `All Events`,
    };
  }
  return {
    title: `Events in ${Capitalize(city)}`,
  };
}

const pageNumberSchema=z.coerce.number().int().positive().optional();
export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const parsedPage=pageNumberSchema.safeParse(searchParams.page)
  if(!parsedPage.success){
    return <NotFound text={"Invalid page no."}/>
  }
  const page = searchParams.page ||1;
  return (
    <>
      <main className="flex flex-col items-center py-24 px-[20px] ">
        <Heading
          text={`${
            params.city === "all"
              ? "All Events"
              : `Events in ${Capitalize(params.city)}`
          }`}
        />
        <Suspense fallback={<AllEventsLoading />}>
          <EventsList city={params.city} page={+page} />
        </Suspense>
      </main>
    </>
  );
}
