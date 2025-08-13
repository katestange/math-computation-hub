import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Users, Calendar, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-serif font-bold text-foreground">
                Mathematical Computation
              </h1>
              <h2 className="text-2xl font-serif text-math-blue">
                Math 8110 • Fall 2025
              </h2>
            </div>
          </div>

          {/* Course Overview */}
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-serif font-semibold mb-6">Course Overview</h2>
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                This course introduces students to computational methods in mathematics, with a focus on practical 
                applications using SageMath software. We'll cover numerical analysis, symbolic computation, 
                visualization techniques, and algorithmic problem-solving approaches.
              </p>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-serif font-semibold mb-8">Getting Started</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <Calculator className="h-6 w-6 text-math-blue" />
                  <h3 className="text-xl font-serif font-semibold">Install Sage</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Install and set up SageMath, the primary computational tool we'll use throughout the course.
                </p>
                <Button asChild>
                  <a href="/sage-installation">
                    View Installation Guide
                  </a>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-6 w-6 text-math-blue" />
                  <h3 className="text-xl font-serif font-semibold">Course Materials</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Access lecture notes, assignments, and supplementary materials for the course.
                </p>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </div>
            </div>
          </section>

          {/* Learning Objectives */}
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-serif font-semibold mb-8">Learning Objectives</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-math-blue">Technical Skills</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li>• Master SageMath for mathematical computation</li>
                  <li>• Implement numerical algorithms</li>
                  <li>• Create mathematical visualizations</li>
                  <li>• Debug and optimize computational code</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-math-blue">Mathematical Concepts</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li>• Apply computational methods to solve problems</li>
                  <li>• Understand algorithmic complexity</li>
                  <li>• Bridge theory and computational practice</li>
                  <li>• Develop mathematical intuition through computation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-serif font-semibold mb-8">Useful Resources</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Button variant="outline" asChild>
                <a href="https://www.sagemath.org/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  SageMath Official Site
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://doc.sagemath.org/html/en/tutorial/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Sage Tutorial
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://cocalc.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  CoCalc Platform
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
