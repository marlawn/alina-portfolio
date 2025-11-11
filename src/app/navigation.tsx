"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="relative w-full mb-4">
      <div className="w-full hidden gap-10 sm:flex items-center justify-between">
        <div className="flex gap-10">
          <Link href="/" className="menu-item">
            Home
          </Link>
          <Link href="/portfolio" className="menu-item">
            Portfolio
          </Link>
        </div>
      </div>

      {pathname !== "/" && (
        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
          ALINA PODOLYAN
        </h3>
      )}

      <div className="w-full flex sm:hidden justify-end">
        <Menu size={32} />
      </div>
    </nav>
  );
};
