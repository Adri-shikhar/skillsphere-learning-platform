import Link from "next/link";
import { MdEmail, MdPhone, MdLocationOn, MdSchool } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 shadow">
              <MdSchool className="text-white text-lg" aria-hidden />
            </div>
            <span className="text-lg font-bold text-purple-700">
              Skill<span className="text-gray-800">Sphere</span>
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            Learn new skills from expert instructors. Build your future — one
            course at a time.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-purple-300 hover:text-purple-600 hover:shadow"
            >
              <FaFacebookF className="text-xs" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-purple-300 hover:text-purple-600 hover:shadow"
            >
              <FaGithub className="text-xs" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-purple-300 hover:text-purple-600 hover:shadow"
            >
              <FaLinkedinIn className="text-xs" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <MdEmail aria-hidden />
              </span>
              support@skillsphere.com
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <MdPhone aria-hidden />
              </span>
              +880 1700-000000
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <MdLocationOn aria-hidden />
              </span>
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Quick Links
          </h4>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link
              href="/"
              className="w-fit text-gray-600 transition hover:text-purple-700"
            >
              Home
            </Link>
            <Link
              href="/Courses"
              className="w-fit text-gray-600 transition hover:text-purple-700"
            >
              All Courses
            </Link>
            <Link
              href="/Profile"
              className="w-fit text-gray-600 transition hover:text-purple-700"
            >
              My Profile
            </Link>
            <Link
              href="/terms"
              className="w-fit text-gray-600 transition hover:text-purple-700"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="w-fit text-gray-600 transition hover:text-purple-700"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
