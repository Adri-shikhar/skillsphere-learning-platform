
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getAuth } from "@/lib/auth";

export async function proxy(request) {
  const auth = getAuth();

  let session = null;
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch {
    try {
      session = await auth.api.getSession({
        headers: request.headers,
      });
    } catch {
      session = null;
    }
  }

  if (session) {
    return NextResponse.next();
  }

  const loginURL = new URL("/Login", request.url);
  loginURL.searchParams.set("callbackURL", request.nextUrl.pathname);
  return NextResponse.redirect(loginURL);
}

export const config = {
  matcher: [
    "/Profile",
    "/Profile/:path*",
    "/CourseDetails/:path*",
  ],
};
