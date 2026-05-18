import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import projectsData from "../../data/projects.json";

type Category = "All" | "Hackathon" | "Game Jam" | "Personal";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "Hackathon", "Game Jam", "Personal"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1>Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of my work from hackathons, game jams, and personal projects.
              Each one taught me something new about building software and solving problems.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                tech={project.tech}
                image={project.image}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
