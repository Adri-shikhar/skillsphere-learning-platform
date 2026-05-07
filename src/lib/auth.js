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

  authSingleton = betterAuth({
    database: mongodbAdapter(db, {
      client,
    }),
    emailAndPassword: {
      enabled: true,
    },
  });

  return authSingleton;
}