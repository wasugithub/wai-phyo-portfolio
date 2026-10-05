import { personalInfo } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50"
    >
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Junior Software Developer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Hi, I'm{" "}
            <span className="text-violet-600">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            I build practical web applications and enjoy turning
            ideas into clean, useful software solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              View Projects
            </a>

            <a
              href={personalInfo.cv}
              download
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-violet-400 hover:text-violet-600"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-sm">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-600 hover:text-violet-600"
            >
              GitHub ↗
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-600 hover:text-violet-600"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-violet-100 sm:h-96 sm:w-96">
            <div className="absolute inset-6 rounded-full border border-violet-200" />

            <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-xl sm:h-64 sm:w-64">
              <div className="text-center">
                <p className="text-5xl font-bold text-violet-600">
                  WP
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Software Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;