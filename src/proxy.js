import { NextResponse } from "next/server";

const SESSION_COOKIE_NAMES = [
  "better-auth.session_token",
  "__Secure-better-auth.session_token",
  "better-auth.session-token",
  "__Secure-better-auth.session-token",
];

export function proxy(request) {
  const isLoggedIn = SESSION_COOKIE_NAMES.some((cookieName) =>
    Boolean(request.cookies.get(cookieName)?.value)
  );

  if (isLoggedIn) {
    return NextResponse.next();
  }

  const loginURL = new URL("/Login", request.url);
  loginURL.searchParams.set("callbackURL", request.nextUrl.pathname);
  return NextResponse.redirect(loginURL);
}

export const config = {
  matcher: ["/CourseDetails/:path*"],
};
