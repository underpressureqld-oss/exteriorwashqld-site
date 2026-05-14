import React from 'react';
import ServiceLayout from './ServiceLayout.jsx';

const SolarPanelCleaningPage = () => {
  return (
    <ServiceLayout
      title="Solar Panel Cleaning | Boost Efficiency | Exterior Wash QLD"
      metaDescription="Maximize your solar output with our pure-water solar panel cleaning service. Spot-free finish, safe for warranties."
      serviceName="Solar Panel Cleaning"
      heroImage="/solar-panels-before.jpg"
      beforeImage="/solar-panels-before.jpg"
      afterImage="/solar-panels-after.jpg"
      description="<p>Dirty solar panels can lose up to 25% of their energy production capacity. Dust, bird droppings, and pollution create a film that blocks sunlight. We use specialized water-fed poles with purified, deionized water. This guarantees a spot-free finish without the use of harsh chemicals or high pressure, keeping your manufacturer warranty intact while maximizing your energy savings.</p>"
      benefits={[
        "Increases solar energy production instantly",
        "Uses 100% pure water for a streak-free, spot-free finish",
        "Safe soft-bristle brushes won't scratch panels",
        "Maintains compliance with manufacturer warranties"
      ]}
      process={[
        { title: "System Check", desc: "We visually inspect panels for cracks or obvious issues before cleaning." },
        { title: "Pure Water Agitation", desc: "Using a soft-bristled brush and pure water to gently scrub away baked-on grime." },
        { title: "Spot-Free Rinse", desc: "Rinsing with deionized water so panels dry crystal clear." }
      ]}
      relatedSuburbs={["Brisbane", "Sunshine Coast", "Gold Coast", "Logan", "Ipswich"]}
      mapEmbedUrl="https://maps.google.com/maps?q=Brisbane%20QLD&t=&z=10&ie=UTF8&iwloc=&output=embed"
    />
  );
};

export default SolarPanelCleaningPage;