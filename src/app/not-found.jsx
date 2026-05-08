import Link from "next/link";
import { MdHome, MdMenuBook } from "react-icons/md";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
          Error 404
        </p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-3 text-gray-600">
          The page you are looking for does not exist or was moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            <MdHome className="text-lg" aria-hidden />
            Back to home
          </Link>
          <Link
            href="/Courses"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-200 bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
          >
            <MdMenuBook className="text-lg" aria-hidden />
            Browse courses
          </Link>
        </div>
      </div>
    </main>
  );
}
