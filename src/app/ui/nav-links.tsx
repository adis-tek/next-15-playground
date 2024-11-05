"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();
  // console.log(pathname); => / or /test or /test/test1/123

  return (
    <nav>
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>

      <Link
        className={`link ${pathname === "/test" ? "active" : ""}`}
        href="/test"
      >
        Test
      </Link>
    </nav>
  );
}
