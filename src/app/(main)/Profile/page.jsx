"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";

const Profile = () => {
  const { data: session } = useSession();
  const picture = session?.user?.image || session?.user?.picture;
  const name = session?.user?.name;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="text-gray-600 mb-4">Welcome to your profile page.</p>
      <p className="text-gray-600 mb-4">Email: {session?.user?.email}</p>
      <p className="text-gray-600 mb-4">Name: {name}</p>
      <div className="mb-4">
        {picture ? (
          <Image
            src={picture}
            alt={name ?? "Profile photo"}
            referrerPolicy="no-referrer"
            width={100}
            height={100}
            className="rounded-full border border-gray-200 object-cover"
          />
        ) : (
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-500">
            No photo
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile