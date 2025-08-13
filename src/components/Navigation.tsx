import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/sage-installation", label: "Sage Installation" },
    { href: "/worksheets", label: "Worksheets" },
  ];

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">
                Math 8110
              </h1>
              <p className="text-sm text-muted-foreground">Fall 2025</p>
            </div>
          </div>
          <div className="flex space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm transition-colors border-b-2 border-transparent",
                  location.pathname === link.href
                    ? "text-primary font-bold border-b-primary"
                    : "text-muted-foreground font-medium hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;