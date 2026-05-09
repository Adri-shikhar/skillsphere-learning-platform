import {
  MdMenuBook,
  MdTimer,
  MdLightbulb,
  MdRepeat,
  MdSelfImprovement,
  MdBarChart,
} from "react-icons/md";

const tips = [
  {
    icon: MdTimer,
    color: "bg-purple-100 text-purple-600",
    title: "Pomodoro Technique",
    body: "Study in focused 25-minute blocks, then take a 5-minute break. After 4 rounds, take a longer 20-minute rest.",
  },
  {
    icon: MdRepeat,
    color: "bg-blue-100 text-blue-600",
    title: "Spaced Repetition",
    body: "Review material at increasing intervals — after 1 day, then 3 days, then a week. Locks knowledge in long-term memory.",
  },
  {
    icon: MdLightbulb,
    color: "bg-amber-100 text-amber-600",
    title: "Active Recall",
    body: "Close your notes and try to recall key ideas from scratch. Testing yourself is far more effective than re-reading.",
  },
  {
    icon: MdMenuBook,
    color: "bg-green-100 text-green-600",
    title: "One Concept at a Time",
    body: "Avoid multitasking between topics. Deep focus on one concept before moving on leads to stronger understanding.",
  },
  {
    icon: MdSelfImprovement,
    color: "bg-pink-100 text-pink-600",
    title: "Consistent Schedule",
    body: "Set a fixed daily study window — even 30 minutes a day beats sporadic long sessions. Consistency compounds.",
  },
  {
    icon: MdBarChart,
    color: "bg-indigo-100 text-indigo-600",
    title: "Track Your Progress",
    body: "Keep a simple log of what you finish each day. Seeing growth motivates you to keep going and reveals weak areas.",
  },
];

const LearningTips = () => {
  return (
    <section className="mt-12 px-4 pb-4">
      <div className="mb-8 text-center">
        <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-700">
          Study smarter
        </span>
        <h2 className="mt-3 text-2xl font-bold text-gray-900">Learning Tips</h2>
        <p className="mt-1.5 text-sm text-gray-500">
          Techniques used by top learners worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div
              key={tip.title}
              className="group flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tip.color} transition group-hover:scale-110`}
              >
                <Icon className="text-xl" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">{tip.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LearningTips;
