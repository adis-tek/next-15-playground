"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "../actions";

export default function NavLinks() {
  const poke: boolean = true;
  const pathname = usePathname();
  // console.log(pathname); => / or /test or /test/test1/123

  return (
    <>
      {poke ? (
        <nav>
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href="/pokemon"
          >
            Pokemon
          </Link>
          <p>|</p>
          <Link
            className={`link ${pathname === "/test" ? "active" : ""}`}
            href="/favorites"
          >
            Favorites
          </Link>
          <p>|</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </nav>
      ) : (
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
          <Link
            className={`link ${pathname === "/dashboard" ? "active" : ""}`}
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={`link ${pathname === "/signup" ? "active" : ""}`}
            href="/signup"
          >
            Sign Up
          </Link>
        </nav>
      )}
    </>
  );
}
