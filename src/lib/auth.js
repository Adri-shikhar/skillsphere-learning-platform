import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let authSingleton;

/** Lazy init: avoids MongoClient(undefined) during `next build` / prerender. */
export function getAuth() {
  if (authSingleton) return authSingleton;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  const client = new MongoClient(uri);
  const db = client.db("SkillSphere");
  const trustedOrigins = [
    "http://localhost:3000",
    "https://skillsphere-learning-platform.vercel.app",
  ];

  if (process.env.BETTER_AUTH_URL) {
    trustedOrigins.push(process.env.BETTER_AUTH_URL);
  }

  if (process.env.VERCEL_URL) {
    trustedOrigins.push(`https://${process.env.VERCEL_URL}`);
  }

  const uniqueTrustedOrigins = [...new Set(trustedOrigins)];
  const fallbackAuthURL =
    process.env.BETTER_AUTH_URL ||
    "https://skillsphere-learning-platform.vercel.app";

  authSingleton = betterAuth({
    baseURL: {
      allowedHosts: ["localhost:3000", "*.vercel.app"],
      fallback: fallbackAuthURL,
      protocol: "auto",
    },
    advanced: {
      trustedProxyHeaders: true,
    },
    database: mongodbAdapter(db, {
      client,
    }),
    trustedOrigins: uniqueTrustedOrigins,
    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
    },
  });

  return authSingleton;
}