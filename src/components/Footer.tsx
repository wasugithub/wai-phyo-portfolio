import { personalInfo } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All
          rights reserved.
        </p>

        <a
          href="#home"
          className="font-medium text-violet-600 hover:text-violet-800"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;