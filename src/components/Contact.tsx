import { personalInfo } from "../data/portfolio";

function Contact() {
  return (
    <section id="contact" className="bg-violet-700 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          Let's build something together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
          I am open to junior software development and web
          development opportunities.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-full bg-white px-6 py-3 font-semibold text-violet-700 transition hover:bg-violet-50"
          >
            {personalInfo.email}
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="rounded-full border border-violet-300 px-6 py-3 font-semibold text-white transition hover:bg-violet-600"
          >
            Call Me
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-violet-100 hover:text-white"
          >
            GitHub
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-violet-100 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;