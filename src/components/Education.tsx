import { awards, education } from "../data/portfolio";

function Education() {
  return (
    <section id="education" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Academic background
          </h2>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900">
              {education.degree}
            </h3>

            <p className="mt-2 text-slate-600">
              {education.university}
            </p>

            <p className="mt-2 text-sm font-medium text-violet-600">
              {education.year}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Certificates & Awards
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Achievements
          </h2>

          <div className="mt-8 space-y-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="border-b border-slate-200 pb-6"
              >
                <h3 className="font-bold text-slate-900">
                  {award.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {award.organization}
                </p>

                <p className="mt-2 text-sm text-violet-600">
                  {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;