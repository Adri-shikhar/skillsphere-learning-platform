import TopCourses from "../TopCourses/TopCourses";
import TopInstructors from "../TopInstructors/TopInstructors";

const byRatingDesc = (a, b) => Number(b.rating) - Number(a.rating);

const topInstructors = [
  {
    name: "Andrew Ng",
    avgRating: "4.9",
    coursesCount: 3,
    topCourse: "Machine Learning A-Z",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    name: "Guillermo Rauch",
    avgRating: "4.9",
    coursesCount: 2,
    topCourse: "Full-Stack Web Architect",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    name: "Jane Smith",
    avgRating: "4.8",
    coursesCount: 4,
    topCourse: "UI/UX Design Masterclass",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    name: "Kevin Mitnick",
    avgRating: "4.8",
    coursesCount: 2,
    topCourse: "Ethical Hacking Fundamentals",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    name: "Ton Roosendaal",
    avgRating: "4.7",
    coursesCount: 2,
    topCourse: "3D Animation with Blender",
    image:
      "https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&w=200&h=200&q=85",
  },
];

const getTopCourses = (courses, limit = 3) => {
  return [...courses].sort(byRatingDesc).slice(0, limit);
};

const HomeHighlights = async () => {
  const api = "https://skillsphere-learning-platform.vercel.app/data.json";
  const courses = await fetch(api).then((res) => res.json());

  const topCourses = getTopCourses(courses, 3);

  return (
    <>
      <TopCourses courses={topCourses} />
      <TopInstructors instructors={topInstructors} />
    </>
  );
};

export default HomeHighlights;
