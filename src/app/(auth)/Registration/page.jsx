"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (formData) => {
    try {
      const { error } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        ...(formData.picture?.trim()
          ? { image: formData.picture.trim() }
          : {}),
      });
      if (error) {
        toast.error(error.message || "Registration failed");
        return;
      }
      toast.success("Account created. Please sign in.");
      router.push("/");
    } catch (e) {
      toast.error(e?.message || "Registration failed. Try again.");
    }
  };
    return (
         <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6 "
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Registration</h1>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@email.com"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Picture</label>
            <input
              type="text"
              name="picture"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Profile Picture URL"
              {...register("picture")}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition-colors"
          >
            Register
          </button>
          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <a href="/Login" className="text-purple-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    );
};

export default Registration;