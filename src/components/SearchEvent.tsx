"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchEvent() {
  const router = useRouter();

  const [event, setEvent] = useState("");
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!event) return;
    router.push(`/events/${event}`);
  }
  return (
    <form
      action=""
      onSubmit={(e) => handleSubmit(e)}
      className="w-full sm:w-[580px]"
    >
      <input
        className="w-full h-16 rounded-lg px-6 bg-white/[7%] outline-none transition focus:ring-2  ring-green-700 focus:bg-white/10"
        type="text"
        placeholder="Search events in any city..."
        spellCheck={false}
        value={event}
        id="search"
        onChange={(e) => setEvent(e.target.value)}
      />
    </form>
  );
}
