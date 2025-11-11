import {
  aboutMeSection,
  portfolioItems,
  TPortfolioItem,
} from "@/constants/constants";
import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div className="h-full w-full flex justify-between sm:items-center items-start">
      <section className="flex flex-col gap-2 flex-1 max-sm:hidden">
        {portfolioItems.map((item: TPortfolioItem) => (
          <Link
            key={item.link}
            href={`/portfolio/${item.link}`}
            className="menu-item"
          >
            {item.title}
          </Link>
        ))}
      </section>
      <section className="flex flex-col items-end gap-5 flex-2">
        <h2>ABOUT</h2>
        <div className="flex flex-col gap-2">
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
