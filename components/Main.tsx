"use client";
import React from "react";
import SearchArea from "./SearchArea";
import { ChevronsRight } from "lucide-react";
import RootInfo from "./RootInfo";
import FAQ from "./FAQ";
import { useRouter } from "next/navigation";

function Main() {
  const router = useRouter();
  return (
    <div className="mt-10 px-2">
      <section className="w-full flex flex-col gap-4 items-center">
        <h1 className="font-semibold tracking-wide text-2xl text-center sm:text-4xl">
          <span className="text-light">Search any</span>{" "}
          <span className="text-main">JAV Videos</span>
        </h1>

        <SearchArea />

        <button
          className="bg-main text-white px-5 py-2 rounded-md font-medium tracking-wide flex gap-2 items-center hover:scale-105 mt-2 lg:px-10 lg:text-xl transition-all duration-200 ease-in-out"
          onClick={() => router.push(`${process.env.NEXT_PUBLIC_URL}`)}
        >
          Browse JAV Video&apos;s
          <ChevronsRight />
        </button>
      </section>

      <section className="mt-10 sm:mt-14 lg:mt-20 flex flex-col gap-4">
        <RootInfo />
        <FAQ />
      </section>
    </div>
  );
}

export default Main;
