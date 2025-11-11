import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full flex-1 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1>ALINA PODOLYAN</h1>
        <span>BFA Fashion Design</span>
        <span>Sportswear Specialization</span>
        <Link href="/portfolio/bfathesis" className="mt-5">
          View my BFA Thesis Collection &gt;&gt;
        </Link>
      </div>
    </div>
  );
}
