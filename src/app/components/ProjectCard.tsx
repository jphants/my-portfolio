import { Link } from "react-router";
import { TechBadge } from "./TechBadge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
}

export function ProjectCard({ id, title, category, description, tech, image }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${id}`}
      className="group block bg-card rounded-lg overflow-hidden border border-border/40 hover:border-border transition-all duration-200"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="text-sm text-muted-foreground mb-1">{category}</div>
            <h3 className="flex items-center gap-2 group-hover:text-muted-foreground transition-colors">
              {title}
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 3).map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
          {tech.length > 3 && (
            <span className="inline-flex items-center px-3 py-1 text-sm text-muted-foreground">
              +{tech.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
