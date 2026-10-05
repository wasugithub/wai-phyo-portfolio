import { skills } from "../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;