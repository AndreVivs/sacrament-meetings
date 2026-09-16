import Link from "next/link";
import type { HeaderProps } from "@/lib/types";
import NavLinks from "./NavLinks";

export default function Header({
  wardName,
  currentDate,
}: HeaderProps) {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-foreground transition-colors hover:text-primary"
          >
            {wardName}
          </Link>

          <p className="mt-1 text-sm text-muted">
            {currentDate}
          </p>
        </div>

        <NavLinks />
      </div>
    </header>
  );
}