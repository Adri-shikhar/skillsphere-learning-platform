"use client";
import React from 'react';
import { useSession } from '@/lib/auth-client';
const Profile = () => {
  const { data: session } = useSession();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="text-gray-600 mb-4">Welcome to your profile page.</p>
      <p className="text-gray-600 mb-4">Email: {session?.user?.email}</p>
      <p className="text-gray-600 mb-4">Name: {session?.user?.name}</p>
      <p className="text-gray-600 mb-4">Picture: {session?.user?.picture}</p>
    </div>
  )
}

export default Profile