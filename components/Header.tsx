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
          <h1 className="text-2xl font-display font-bold text-foreground">
            {wardName}
          </h1>

          <p className="mt-1 text-sm text-muted">
            {currentDate}
          </p>
        </div>

        <NavLinks />
      </div>
    </header>
  );
}