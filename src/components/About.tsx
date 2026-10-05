import { aboutText } from "../data/portfolio";

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Building software with purpose.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {aboutText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;