import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

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
                Topics in Number Theory: Mathematical Computation
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
                Welcome to Math 8110: Topics in Number Theory
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                You will be bringing your laptop to class every day; this is a workshop, not lecture, course.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Before the first day of class, please try to get Sage installed on your own machine. This is the most reliable option. Sage is also available to graduate students at sage.colorado.edu.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <a href="/sage-installation">
                    Sage Installation Guide
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
