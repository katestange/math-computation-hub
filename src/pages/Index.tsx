import Navigation from "@/components/Navigation";
import frontPageLogo from "@/assets/front-page-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <img src={frontPageLogo} alt="Mathematical Pattern" className="w-32 h-32" />
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl font-serif font-bold text-foreground">
                Topics in Number Theory: Mathematical Computation
              </h1>
              <h2 className="text-2xl font-serif text-math-blue">
                Math 8114 • Fall 2025
              </h2>
              <h3 className="text-xl font-serif text-muted-foreground">
                Katherine E. Stange
              </h3>
            </div>
          </div>

          {/* Main Content */}
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-serif font-semibold mb-6">Welcome to Math 8114: Topics in Number Theory</h2>
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                You will be bringing your laptop to class every day; this is a workshop, not lecture, course.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Before the first day of class, please try to get <a href="#/sage-installation" className="text-primary underline hover:no-underline">Sage installed on your own machine</a>. This is the most reliable option. Sage is also available to graduate students at <a href="https://sage.colorado.edu/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">sage.colorado.edu</a>.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
