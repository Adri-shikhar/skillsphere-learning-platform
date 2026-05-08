/**
 * Courses listing hero — banner style aligned with SkillSphere purple theme.
 */
export default function CoursesHero({ count }) {
  return (
    <section
      className="mb-10 overflow-hidden rounded-3xl bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-10 shadow-lg shadow-purple-900/15 ring-1 ring-white/10 md:px-12 md:py-12"
      aria-labelledby="courses-hero-heading"
    >
      <span className="inline-block rounded-full border border-white/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
        All courses
      </span>
      <h2
        id="courses-hero-heading"
        className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl"
      >
        Discover your next favorite skill
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 md:text-base">
        Browse the full catalog with a look that matches the SkillSphere home
        experience — {count} courses ready when you are.
      </p>
    </section>
  );
}
