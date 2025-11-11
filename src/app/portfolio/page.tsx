import {
  aboutMeSection,
  portfolioItems,
  TPortfolioItem,
} from "@/constants/constants";
import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div className="h-full w-full flex justify-between items-start">
      <section className="flex flex-col gap-0.5 flex-4 max-sm:hidden">
        {portfolioItems.map((item: TPortfolioItem) => (
          <div key={item.link}>
            <Link href={`/portfolio/${item.link}`} className="menu-item">
              {item.title}
            </Link>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-end gap-2 flex-5">
        <h3>ABOUT</h3>
        <div className="flex flex-col gap-1 max-sm:gap-4">
          {aboutMeSection.map((paragraph, index) => (
            <p key={index} className="text-end">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
