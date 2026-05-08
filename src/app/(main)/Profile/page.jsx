/* eslint-disable @next/next/no-img-element -- avatar URL is user-controlled; avoid next/image remote host errors */
"use client";
import React from "react";
import { useSession } from "@/lib/auth-client";

/** Only allow absolute http(s) URLs so `src` never throws and random text is ignored. */
function safeAvatarUrl(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const u = new URL(trimmed);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.href;
  } catch {
    return null;
  }
}

const Profile = () => {
  const { data: session } = useSession();
  const picture = safeAvatarUrl(
    session?.user?.image || session?.user?.picture
  );
  const name = session?.user?.name;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="text-gray-600 mb-4">Welcome to your profile page.</p>
      <p className="text-gray-600 mb-4">Email: {session?.user?.email}</p>
      <p className="text-gray-600 mb-4">Name: {name}</p>
      <div className="mb-4">
        {picture ? (
          <img
            src={picture}
            alt={name ?? "Profile photo"}
            referrerPolicy="no-referrer"
            width={100}
            height={100}
            className="h-[100px] w-[100px] rounded-full border border-gray-200 object-cover"
          />
        ) : (
          <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border border-dashed border-gray-300 bg-gray-50 px-2 text-center text-xs text-gray-500">
            <span>No photo</span>
            {(session?.user?.image || session?.user?.picture) && (
              <span className="mt-1 text-[10px] leading-tight text-gray-400">
                Invalid image URL — use a full link starting with https://
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
