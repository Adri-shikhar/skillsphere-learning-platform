/* eslint-disable @next/next/no-img-element -- user can paste any image URL */
"use client";
import React from "react";
import Link from "next/link";
import {
  MdArrowBack,
  MdEmail,
  MdPerson,
  MdSchool,
  MdMenuBook,
} from "react-icons/md";
import { useSession } from "@/lib/auth-client";
import { UpdateUser } from "@/app/Components/UpdateUser/UpdateUser";

const Profile = () => {
  const { data: session, isPending } = useSession();

  const name = session?.user?.name || "Learner";
  const email = session?.user?.email || "";
  const rawPhoto = String(
    session?.user?.image || session?.user?.picture || ""
  );

  // Only use photo if it is a real http or https link (stops crashes on bad text)
  let photoUrl = null;
  if (rawPhoto.trim() !== "") {
    try {
      const u = new URL(rawPhoto.trim());
      if (u.protocol === "http:" || u.protocol === "https:") {
        photoUrl = rawPhoto.trim();
      }
    } catch {
      photoUrl = null;
    }
  }

  // Big letters when there is no photo (first 2 letters of name, or of email)
  let avatarLetters = "?";
  const cleanName = name.trim();
  if (cleanName.length >= 2) {
    avatarLetters = cleanName.substring(0, 2).toUpperCase();
  } else if (cleanName.length === 1) {
    avatarLetters = cleanName.toUpperCase();
  } else if (email.length >= 2) {
    avatarLetters = email.substring(0, 2).toUpperCase();
  }

  // Short help text about the photo field
  let photoHelp =
    "Add a photo URL when you register, or sign in with Google.";
  if (photoUrl) {
    photoHelp = "Your photo is shown above.";
  } else if (rawPhoto.trim() !== "") {
    photoHelp =
      "That value is not a valid web link. Use a full address starting with https://";
  }

  if (isPending) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-10 pb-16">
          <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200" />
          <div className="mt-8 h-64 animate-pulse rounded-2xl bg-gray-200" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10 pb-16">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          <MdArrowBack className="text-lg" aria-hidden />
          Back to home
        </Link>

        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="relative overflow-hidden bg-linear-to-br from-purple-600 via-violet-600 to-indigo-700 px-6 py-10 md:px-10 md:py-12">
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-16 size-64 rounded-full bg-indigo-500/30 blur-3xl"
              aria-hidden
            />

            <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10 md:text-left">
              <div className="relative mx-auto shrink-0 md:mx-0">
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt={name + " profile photo"}
                    referrerPolicy="no-referrer"
                    width={128}
                    height={128}
                    className="h-28 w-28 rounded-2xl border-4 border-white object-cover shadow-xl ring-2 ring-white/30 md:h-32 md:w-32"
                  />
                ) : (
                  <div
                    className="flex h-28 w-28 items-center justify-center rounded-2xl border-4 border-white bg-white/15 text-3xl font-bold tracking-tight text-white shadow-xl ring-2 ring-white/25 backdrop-blur-sm md:h-32 md:w-32 md:text-4xl"
                    aria-hidden
                  >
                    {avatarLetters}
                  </div>
                )}
                <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-semibold text-purple-700 shadow-md">
                  <MdSchool className="text-sm" aria-hidden />
                  SkillSphere
                </span>
              </div>

              <div className="min-w-0 flex-1 text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 md:text-sm">
                  My profile
                </p>
                <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white drop-shadow-sm md:text-4xl">
                  {name}
                </h1>
                {email !== "" ? (
                  <p className="mt-3 flex items-center justify-center gap-2 text-sm text-white/90 md:justify-start">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/15">
                      <MdEmail className="text-lg text-white" aria-hidden />
                    </span>
                    <span className="truncate font-medium">{email}</span>
                  </p>
                ) : (
                  <p className="mt-3 text-sm text-white/75">
                    No email on file for this account.
                  </p>
                )}
                <div className="mt-6 flex justify-center md:justify-start">
                  <UpdateUser defaultName={name} defaultEmail={email} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
            <section className="rounded-xl border border-gray-100 bg-gray-50/90 p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                <MdPerson className="text-lg text-purple-600" aria-hidden />
                Account details
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-medium text-gray-500">Display name</p>
                  <p className="mt-0.5 text-base font-medium text-gray-900">{name}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Email</p>
                  <p className="mt-0.5 break-all text-base text-gray-800">
                    {email !== "" ? email : "—"}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Profile photo</p>
                  <p className="mt-0.5 text-sm text-gray-700">{photoHelp}</p>
                </div>
              </div>
            </section>

            <section className="flex flex-col justify-between gap-4 rounded-xl border border-purple-100 bg-purple-50/60 p-5">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-purple-800">
                  Keep learning
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                  Jump back into courses or explore something new on SkillSphere.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/Courses"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700"
                >
                  <MdMenuBook className="text-lg" aria-hidden />
                  Browse courses
                </Link>
                <Link
                  href="/"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-purple-200 bg-white px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
                >
                  Home
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Profile;
