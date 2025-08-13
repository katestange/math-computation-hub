import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const SageInstallation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif font-bold text-foreground">
              Installing Sage
            </h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Installing Sage on Mac and Linux is fairly easy, and Windows is challenging.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              You have two basic options: install an existing executable file, or compile from source. The latter produces a more efficient/optimized version of Sage on your machine, but it is more complicated and time consuming. I strongly recommend you carefully read and adhere to the installation instructions (seriously - a stitch in time!).
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              If you install from source, expect significant compile time. In this case, you can opt to set your machine up for development, which means contributing your own code to Sage. You are welcome to do this, but it is certainly not required, and you can do it at a later time.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              If you have trouble installing Sage, your most expedient option nowadays is to ask ChatGPT for help. You can paste in error messages etc. and it can help you troubleshoot.
            </p>
          </div>

          <div className="space-y-4 mt-8">
            <Button asChild>
              <a href="https://www.sagemath.org/" target="_blank" rel="noopener noreferrer">
                SageMath Official Website
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://sage.colorado.edu/" target="_blank" rel="noopener noreferrer">
                sage.colorado.edu
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SageInstallation;