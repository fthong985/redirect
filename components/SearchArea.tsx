"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchArea() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    router.push(`${process.env.NEXT_PUBLIC_URL}/search/${query}`);
  }
  return (
    <form
      className="flex gap-[2px] min-[450px]:px-6 w-full md:w-[800px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search Actress, JAV code, Genre, etc..."
        required
        className="flex-1 bg-[#353535] py-2 outline-none px-2 text-white focus:bg-none placeholder:text-light placeholder:opacity-60 rounded-l-md min-[450px]:self-center xl:py-3"
        autoComplete="off"
      />
      <button
        className="text-white mr-2 bg-[#353535] w-12 grid place-items-center rounded-r-md md:w-16"
        type="submit"
      >
        <Search size={22} />
      </button>
    </form>
  );
}

export default SearchArea;
