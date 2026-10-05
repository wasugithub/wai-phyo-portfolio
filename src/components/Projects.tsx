import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Featured Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Selected work
          </h2>

          <p className="mt-4 text-slate-600">
            A selection of academic, personal, and professional
            projects that demonstrate my development experience.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="flex min-h-72 items-center justify-center bg-violet-50 p-8">
                  <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-4 text-3xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <p className="text-sm font-semibold text-violet-600">
                    {project.category}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-slate-900">
                      Technologies
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-slate-900">
                      Key Features
                    </p>

                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-slate-600"
                        >
                          <span className="mr-2 text-violet-600">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex font-semibold text-violet-600 hover:text-violet-800"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;