import { experience } from "../data/portfolio";

function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          Experience
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Professional experience
        </h2>

        <div className="mt-10">
          {experience.map((item) => (
            <div
              key={item.company}
              className="border-l-2 border-violet-300 pl-6"
            >
              <p className="text-sm font-semibold text-violet-600">
                {item.duration}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {item.position}
              </h3>

              <p className="mt-1 font-medium text-slate-600">
                {item.company}
              </p>

              <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;