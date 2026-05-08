export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 bg-gray-50 px-4 py-16"
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"
        role="status"
        aria-label="Loading page"
      />
      <p className="text-sm font-medium text-gray-600">Loading…</p>
    </div>
  );
}
