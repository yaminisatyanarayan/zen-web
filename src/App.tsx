import * as React from "react";
import { Navigation } from "./components/landing/Navigation";
import { Hero } from "./components/landing/Hero";
import { LogoWall } from "./components/landing/LogoWall";
import { Problem } from "./components/landing/Problem";
import { ProductSuite } from "./components/landing/ProductSuite";
import { DeterministicAI } from "./components/landing/DeterministicAI";
import { IndustrySolutions } from "./components/landing/IndustrySolutions";
import { CustomerStory } from "./components/landing/CustomerStory";
import { Integrations } from "./components/landing/Integrations";
import { Security } from "./components/landing/Security";
import { HowItWorks } from "./components/landing/HowItWorks";
import { Pricing } from "./components/landing/Pricing";
import { FinalCTA } from "./components/landing/FinalCTA";
import { Footer } from "./components/landing/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-primary selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <LogoWall />
        <Problem />
        <ProductSuite />
        <DeterministicAI />
        <IndustrySolutions />
        <CustomerStory />
        <Integrations />
        <Security />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
