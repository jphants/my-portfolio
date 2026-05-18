import { Link } from "react-router";
import { Github, FileText, ArrowRight, Linkedin } from "lucide-react";

export function Home() {
  const techStack = [
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Flutter",
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Docker",
    "Linux",
    "Git",
    "Godot",
    "Unity"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-muted-foreground">Greetings, I'm</div>
            <h1 className="text-5xl md:text-6xl tracking-tight">Jorge Nuñez</h1>
            <div className="text-xl text-muted-foreground">Computer Science Student</div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            CS student and Machine Learning enthusiast focused on building practical AI solutions 
            across research, startups, and hackathon environments. Passionate about computer vision, 
            healthcare applications, and explainable AI, with experience developing fullstack and 
            mobile products using React, Flutter, and Deep Learning frameworks.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/jphants"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-nunez-paucar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-secondary transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <h2 className="text-muted-foreground">Technologies I work with</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      
      {/* Featured Work Preview */}
<section className="max-w-4xl mx-auto px-6 py-20">
  <div className="space-y-8">
    <div className="flex items-center justify-between">
      <h2>Featured Work</h2>
      <Link
        to="/projects"
        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
      >
        View all projects
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

    <div className="grid gap-6">
      <Link
        to="/projects/hampy-nanay"
        className="group block p-6 border border-border/40 rounded-lg hover:border-border transition-colors"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="group-hover:text-muted-foreground transition-colors">
                Hampy Nanay
              </h3>
              <span className="text-sm text-muted-foreground">
                Healthcare AI / Hackathon
              </span>
            </div>
            <p className="text-muted-foreground">
              AI-powered surgery recovery assistant with personalized care plans and reminders.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>

      <Link
        to="/projects/anemiaguard"
        className="group block p-6 border border-border/40 rounded-lg hover:border-border transition-colors"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="group-hover:text-muted-foreground transition-colors">
                AnemiaGuard
              </h3>
              <span className="text-sm text-muted-foreground">
                Healthcare AI / Computer Vision
              </span>
            </div>
            <p className="text-muted-foreground">
              Offline-first anemia risk estimation app using computer vision and machine learning.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>

      <Link
        to="/projects/bracelet-studio"
        className="group block p-6 border border-border/40 rounded-lg hover:border-border transition-colors"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="group-hover:text-muted-foreground transition-colors">
                Bracelet Studio
              </h3>
              <span className="text-sm text-muted-foreground">
                Game Jam
              </span>
            </div>
            <p className="text-muted-foreground">
              Interactive customization game focused on bracelet crafting and player creativity.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  </div>
</section>

    </div>
  );
}
