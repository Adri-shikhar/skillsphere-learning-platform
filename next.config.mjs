import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Parent folder has its own lockfile; Next would pick that as Turbopack root and
  // miss deps installed only in this app (e.g. mongodb for better-auth adapter).
  turbopack: {
    root: __dirname,
  },
  serverExternalPackages: ["mongodb"],
};

export default nextConfig;
