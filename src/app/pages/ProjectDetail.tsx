import { useParams, Link, Navigate } from "react-router";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { TechBadge } from "../components/TechBadge";
import projectsData from "../../data/projects.json";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
      </section>

      {/* Hero Image */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="aspect-video rounded-lg overflow-hidden bg-muted border border-border/40">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Header */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="text-muted-foreground">{project.category} Project</div>
            <h1 className="text-4xl md:text-5xl">{project.title}</h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-secondary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <div className="space-y-4">
              <h2>Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {project.learned && project.learned.length > 0 && (
              <div className="space-y-4">
                <h2>What I Learned</h2>
                <ul className="space-y-3">
                  {project.learned.map((item, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-foreground mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div className="space-y-4">
                <h2>Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((item, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-foreground mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3>Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3>Category</h3>
              <div className="text-muted-foreground">{project.category}</div>
            </div>

            {(project.github || project.demo) && (
              <div className="space-y-4">
                <h3>Links</h3>
                <div className="space-y-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border/40">
        <div className="flex justify-between items-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>
        </div>
      </section>
    </div>
  );
}
