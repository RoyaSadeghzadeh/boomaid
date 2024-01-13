import Header from "@/layout/main/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link
          className=" bg-Boomaid/yellow rounded-md text-white py-4 px-6"
          href="/verification">
          Go To Verification Page
        </Link>
      </main>
    </>
  );
}
