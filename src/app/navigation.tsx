'use client'

import { Menu } from "lucide-react";
import Link from "next/link";

export const Navigation = () => {
    return (
        <nav>
            <div className="w-full hidden gap-10 sm:flex">
                <Link href="/">Home</Link>
                <Link href="/portfolio">Portfolio</Link>
            </div>

            <div className="w-full flex sm:hidden justify-end">
                <Menu size={32} />
            </div>
        </nav>
    );
};
