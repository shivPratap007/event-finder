import Heading from "@/components/Heading";
import SearchEvent from "@/components/SearchEvent";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
      <main className="flex flex-col items-center pt-36 px-3 ">
        <Heading text={"Find events around you"}/>
        <p className="mb-12 text-center mt-7 text-2xl lg:text-3xl opacity-75">
          Browse more than{" "}
          <span className="text-green-700 italic underline font-bold">
            1000 events
          </span>{" "}
          around you
        </p>

        <SearchEvent/>
        <section className="mt-4 flex gap-x-4 text-sm text-white/50">
          <p>Popular:</p>
          <div className="flex gap-x-2">
            <Link className="hover:text-white" href={"/events/delhi"}>
              Delhi
            </Link>
            <Link
              className="hover:text-white transition"
              href={"/events/mumbai"}
            >
              Mumbai
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
