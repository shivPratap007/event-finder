"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-4 sm:px-9">
      <Logo />
      <nav className="relative">
        <ul className="flex justify-center items-center gap-2 relative">
          {routes.map((route) => (
            <li
              key={route.name}
              className={cn(
                " transition hover:text-white px-3 relative",
                { "text-white": activePathname === route.path },
                { "text-white/50": activePathname !== route.path }
              )}
            >
              <Link className="mb-2" href={route.path}>{route.name}</Link>
              {activePathname === route.path && (
                <motion.div
                  className="absolute bottom-0  left-0 right-0 h-[2px] w-full mt-3 bg-green-700"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
