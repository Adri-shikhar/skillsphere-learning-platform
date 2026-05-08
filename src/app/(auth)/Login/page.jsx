"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (formData) => {
    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Login failed");
        return;
      }
      toast.success("Logged in successfully");
      router.push("/");
      router.refresh();
    } catch (e) {
      toast.error(e?.message || "Something went wrong. Try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      if (error) {
        toast.error(error.message || "Google login failed");
      }
      // Success: browser redirects to Google / callback — no toast needed here
    } catch (e) {
      toast.error(e?.message || "Google login failed");
    }
  };

    return (
         <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6 "
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@email.com"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
          <p className="text-center text-xs text-gray-400">or</p>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded font-semibold hover:bg-gray-50 transition-colors"
          >
            <FcGoogle className="text-xl" />
            Log in with Google
          </button>
          <p className="text-center text-sm mt-2">
            Donnot have an account?{" "}
            <a href="/Registration" className="text-purple-500 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    );
};

export default Login;