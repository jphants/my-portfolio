interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm">
      {tech}
    </span>
  );
}
