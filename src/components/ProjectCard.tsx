import Link from "next/link";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-number">
        {project.number}
      </div>

      <div className="project-content">
        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.technologies.slice(0, 5).map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>

        <div className="project-actions">
          <Link
            href={`/projects/${project.slug}`}
            className="btn btn-primary"
          >
            View Details
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}