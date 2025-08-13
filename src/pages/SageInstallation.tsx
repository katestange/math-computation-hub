import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Code, Terminal } from "lucide-react";

const SageInstallation = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif font-bold text-foreground">
              Installing Sage Math Software
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              SageMath is a free, open-source mathematics software system that we'll use throughout the course for computational mathematics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Quick Start */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-math-blue" />
                  Quick Start Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Online (Recommended for beginners)</h3>
                  <p className="text-sm text-muted-foreground">
                    Start immediately without installation using CoCalc.
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://cocalc.com/features/sage" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Use Sage Online
                    </a>
                  </Button>
                </div>
                <div className="border-t pt-3">
                  <h3 className="font-semibold">Jupyter Notebooks</h3>
                  <p className="text-sm text-muted-foreground">
                    Try Sage in your browser with Binder.
                  </p>
                  <Button variant="outline" asChild className="w-full mt-2">
                    <a href="https://mybinder.org/v2/gh/sagemath/sage-binder-env/master" target="_blank" rel="noopener noreferrer">
                      <Code className="mr-2 h-4 w-4" />
                      Launch Binder
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Local Installation */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-math-blue" />
                  Local Installation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  For full functionality and offline use, install Sage on your computer.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" asChild className="w-full">
                    <a href="https://www.sagemath.org/download.html" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Download for Windows/Mac/Linux
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a href="https://doc.sagemath.org/html/en/installation/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Installation Guide
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Installation Methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold">Platform-Specific Instructions</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Windows</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Download the Windows installer or use WSL (Windows Subsystem for Linux).
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://github.com/sagemath/sage-windows/releases" target="_blank" rel="noopener noreferrer">
                        Windows Installer
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://doc.sagemath.org/html/en/installation/conda.html" target="_blank" rel="noopener noreferrer">
                        Via Conda
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">macOS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Install via Homebrew, Conda, or download the app bundle.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://github.com/3-manifolds/Sage_macOS/releases" target="_blank" rel="noopener noreferrer">
                        macOS App
                      </a>
                    </Button>
                    <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                      <code>brew install --cask sagemath</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Linux</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Install from your distribution's package manager or build from source.
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                      <div>Ubuntu/Debian:</div>
                      <code>sudo apt install sagemath</code>
                    </div>
                    <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                      <div>Fedora:</div>
                      <code>sudo dnf install sagemath</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Getting Started */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Getting Started with Sage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Once you have Sage installed, here are some helpful resources to get you started:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <Button variant="outline" asChild>
                  <a href="https://doc.sagemath.org/html/en/tutorial/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Sage Tutorial
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://doc.sagemath.org/html/en/reference/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Reference Manual
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://wiki.sagemath.org/quickref" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Quick Reference
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://ask.sagemath.org/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ask Sage Community
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-accent/50 border border-accent-foreground/20 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground">
              If you encounter any issues during installation, please reach out during office hours or post on the course discussion forum. 
              We recommend starting with the online version if you're having trouble with local installation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SageInstallation;