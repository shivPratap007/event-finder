import Link from "next/link";

export default function Footer() {
  const routes = [
    {
      path: "/terms-conditions",
      name: "Terms & Conditions",
    },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
    },
  ];
  return (
    <footer className="mt-40 flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2030 Shiv Production. All rights are reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8 ">
        {routes.map((route) => (
          <li key={route.path}>
            <Link className="hover:text-white/50 transition" href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
