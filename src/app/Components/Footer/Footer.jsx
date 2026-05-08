import Link from "next/link";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-purple-700">SkillSphere</h3>
          <p className="mt-2 text-sm text-gray-600">
            Learn new skills from expert instructors. Build future one course at
            a time.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <MdEmail className="text-purple-600" aria-hidden />
              support@skillsphere.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-purple-600" aria-hidden />
              +880 1700-000000
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-purple-600" aria-hidden />
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Quick Links
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/terms" className="text-gray-600 hover:text-purple-700">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-purple-700">
              Privacy Policy
            </Link>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:border-purple-300 hover:text-purple-700"
            >
              <FaFacebookF aria-hidden />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:border-purple-300 hover:text-purple-700"
            >
              <FaGithub aria-hidden />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:border-purple-300 hover:text-purple-700"
            >
              <FaLinkedinIn aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
