import Navigation from "@/components/Navigation";
import { useEffect } from "react";

const Worksheets = () => {
  useEffect(() => {
    document.title = "Worksheets";
  }, []);

  const worksheets = [
    { date: "September 5, 2025", subject: "Introduction to SageMath", link: "" },
    { date: "September 12, 2025", subject: "Basic Number Theory Functions", link: "" },
    { date: "September 19, 2025", subject: "Modular Arithmetic", link: "" },
    { date: "September 26, 2025", subject: "Prime Numbers and Factorization", link: "" },
    { date: "October 3, 2025", subject: "Cryptographic Applications", link: "" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif font-bold text-foreground">
              Worksheets
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
                    Link coming soon
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