import { Link, useLocation } from "react-router";
import { Github, FileText } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center">
            <span className="text-background font-medium">CS</span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`transition-colors ${
              isActive("/") && location.pathname === "/"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`transition-colors ${
              isActive("/projects")
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Projects
          </Link>
          <a
            href="https://github.com/jphants"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
