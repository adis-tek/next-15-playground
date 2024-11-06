import { NextResponse, NextRequest } from "next/server";
import { permanentRedirect } from "next/navigation";

export function middleware(request: NextRequest) {
  console.log("Middleware", request.url);

  // example of a redirect
  // return NextResponse.redirect(new URL("/login", request.url));

  // example of a permanent redirect
  // return permanentRedirect(`/profile/${username}`);

  return NextResponse.next();
}

export const config: {
  matcher: string;
} = {
  matcher: "/test",
};
