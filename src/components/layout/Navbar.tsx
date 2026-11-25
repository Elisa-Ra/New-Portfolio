import Link from "next/link";

const links = [
  { href: "/about", label: "Chi sono" },
  { href: "/projects", label: "Progetti" },
  { href: "/contact", label: "Contatti" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink/10 bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Elisa Raeli
        </Link>
        <ul className="flex gap-2 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 transition hover:bg-primary hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}