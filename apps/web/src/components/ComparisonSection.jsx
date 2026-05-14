import React from 'react';
import { CheckCircle2, XCircle, MinusCircle } from 'lucide-react';

const ComparisonSection = () => {
  const criteria = [
    { name: "Professional Industrial Equipment", us: true, diy: false, competitor: "mixed" },
    { name: "Fully Insured & Police Checked", us: true, diy: "N/A", competitor: "mixed" },
    { name: "Fast Quotes (Under 24h)", us: true, diy: "N/A", competitor: false },
    { name: "Quality Results Guaranteed", us: true, diy: false, competitor: "mixed" },
    { name: "Eco-Friendly Cleaning Solutions", us: true, diy: false, competitor: false },
    { name: "Local QLD Family Business", us: true, diy: true, competitor: false },
  ];

  const renderStatus = (status) => {
    if (status === true) return <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />;
    if (status === false) return <XCircle className="w-6 h-6 text-destructive mx-auto" />;
    if (status === "mixed") return <MinusCircle className="w-6 h-6 text-muted-foreground mx-auto" />;
    return <span className="text-muted-foreground text-sm">{status}</span>;
  };

  return (
    <section className="section-spacing bg-background">
      <div className="section-container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Exterior Wash QLD?</h2>
          <p className="text-lg text-muted-foreground">See how our professional service stacks up against the rest.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full min-w-[600px] text-left border-collapse bg-card">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="p-4 md:p-6 font-semibold text-foreground w-2/5">Feature</th>
                <th className="p-4 md:p-6 font-bold text-primary text-center bg-primary/5 w-1/5">Exterior Wash QLD</th>
                <th className="p-4 md:p-6 font-semibold text-muted-foreground text-center w-1/5">DIY Cleaning</th>
                <th className="p-4 md:p-6 font-semibold text-muted-foreground text-center w-1/5">Generic Chains</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {criteria.map((item, idx) => (
                <tr key={idx} className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 md:p-6 text-sm md:text-base font-medium text-foreground">{item.name}</td>
                  <td className="p-4 md:p-6 text-center bg-primary/5">{renderStatus(item.us)}</td>
                  <td className="p-4 md:p-6 text-center">{renderStatus(item.diy)}</td>
                  <td className="p-4 md:p-6 text-center">{renderStatus(item.competitor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;