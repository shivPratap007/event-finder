import Link from "next/link";
import Logo from "./Logo";

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
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-4 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex justify-center items-center gap-5">
          {routes.map((route) => (
            <li
              key={route.name}
              className="text-white/50 transition hover:text-green-700 hover:underline  px-3"
            >
              {" "}
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
