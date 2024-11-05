"use client";

import { useSearchParams, usePathname } from "next/navigation";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function handleSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams);
    params.set("Sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  function switchLocale(locale: string) {
    // en/dashboard or bs/dashboard
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, "", newPath);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Lists of data.</p>

      <p>Language:</p>

      <button onClick={() => switchLocale("en")}>En</button>
      <button onClick={() => switchLocale("bs")}>Bs</button>

      <p>Sort:</p>
      <button onClick={() => handleSorting("newest")}>Newest</button>
      <button onClick={() => handleSorting("oldest")}>Oldest</button>
    </div>
  );
}
