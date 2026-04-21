"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function SearchInput() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const isSelfUpdate = useRef(false);

  // Effect 1: Sync URL when user types in the search input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });
        isSelfUpdate.current = true;
        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["topic"],
        });
        isSelfUpdate.current = true;
        router.push(newUrl, { scroll: false });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, pathName]);

  // Effect 2: Sync input value when URL changes externally (browser back/forward)
  useEffect(() => {
    if (isSelfUpdate.current) {
      isSelfUpdate.current = false;
      return;
    }
    setSearchQuery(topic);
  }, [topic]);
  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image
        src="/icons/search.svg"
        alt="search"
        width={15}
        height={15}
      ></Image>
      <input
        type="text"
        placeholder="Search companions..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
