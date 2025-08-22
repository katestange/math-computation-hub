import Navigation from "@/components/Navigation";
import { useEffect } from "react";

const Worksheets = () => {
  useEffect(() => {
    document.title = "Calendar";
  }, []);

  const worksheets = [
    { date: "Friday, August 22, 2025", subject: "Case Study One: Quadratic Residues", link: "notebooks/CS01-LegendreSymbols-Empty.ipynb" },
    { date: "Monday, August 25, 2025", subject: "Modular Arithmetic", link: "" },
    { date: "Wednesday, August 27, 2025", subject: "TBA", link: "" },
    { date: "Friday, August 29, 2025", subject: "TBA", link: "" },
    { date: "Monday, September 2, 2025", subject: "TBA", link: "" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif font-bold text-foreground">
              Calendar
            </h1>
          </div>

          <div className="space-y-4">
            {worksheets.map((worksheet, index) => (
              <div key={index} className="border-b border-border pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      {worksheet.subject}
                    </h3>
                    <p className="text-muted-foreground">{worksheet.date}</p>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {worksheet.link ? (
                      <a 
                        href={worksheet.link} 
                        className="text-primary hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Notebook
                      </a>
                    ) : (
                      "Link coming soon"
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Worksheets;