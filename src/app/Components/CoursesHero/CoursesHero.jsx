/**
 * Courses listing hero — banner style aligned with SkillSphere purple theme.
 */
export default function CoursesHero({ count }) {
  return (
    <section
      className="relative mb-10 overflow-hidden rounded-3xl bg-linear-to-br from-purple-600 via-violet-600 to-indigo-700 px-8 py-12 shadow-xl shadow-purple-900/20 ring-1 ring-white/10 md:px-14 md:py-14"
      aria-labelledby="courses-hero-heading"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-indigo-500/30 blur-3xl" aria-hidden />

      <span className="relative inline-block rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
        All courses
      </span>
      <h2
        id="courses-hero-heading"
        className="relative mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white drop-shadow-sm md:text-4xl"
      >
        Discover your next favorite skill
      </h2>
      <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
        Browse the full catalog — <span className="font-semibold text-white">{count} courses</span> ready when you are.
      </p>
    </section>
  );
}
