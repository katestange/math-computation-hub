import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Users, Calendar, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Welcome to Mathematical Computation, where we explore the intersection of mathematics and computing. 
              Learn to harness the power of computational tools for solving complex mathematical problems.
            </p>
          </div>

          {/* Course Overview */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Course Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                This course introduces students to computational methods in mathematics, with a focus on practical 
                applications using SageMath software. We'll cover numerical analysis, symbolic computation, 
                visualization techniques, and algorithmic problem-solving approaches.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-accent/50">
                  <Calculator className="h-5 w-5 text-math-blue" />
                  <span className="text-sm font-medium">Numerical Methods</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-accent/50">
                  <BookOpen className="h-5 w-5 text-math-blue" />
                  <span className="text-sm font-medium">Symbolic Computing</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-accent/50">
                  <Users className="h-5 w-5 text-math-blue" />
                  <span className="text-sm font-medium">Collaborative Projects</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-accent/50">
                  <Calendar className="h-5 w-5 text-math-blue" />
                  <span className="text-sm font-medium">Applied Research</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-math-blue" />
                  Get Started with Sage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Install and set up SageMath, the primary computational tool we'll use throughout the course.
                </p>
                <Button asChild className="w-full">
                  <a href="/sage-installation">
                    View Installation Guide
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-math-blue" />
                  Course Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access lecture notes, assignments, and supplementary materials for the course.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Learning Objectives */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-math-blue">Technical Skills</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Master SageMath for mathematical computation</li>
                    <li>• Implement numerical algorithms</li>
                    <li>• Create mathematical visualizations</li>
                    <li>• Debug and optimize computational code</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-math-blue">Mathematical Concepts</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Apply computational methods to solve problems</li>
                    <li>• Understand algorithmic complexity</li>
                    <li>• Bridge theory and computational practice</li>
                    <li>• Develop mathematical intuition through computation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* External Resources */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Useful Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
