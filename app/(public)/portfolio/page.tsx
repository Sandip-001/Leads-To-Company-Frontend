import { Metadata } from "next";
import CTASection from "./_components/CTA";
import PortfolioHero from "./_components/Hero";
import PortfolioGrid from "./_components/ProtfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio - Leads To Company | Leading IT Solutions Provider",
  description: "Explore Leads To Company' portfolio of successful web design, web applications, and mobile app projects. View our curated collection of 30+ completed projects across various industries.",
};

const PortfolioPage: React.FC = () => {
  return (
    <>

      <div className="min-h-screen bg-white">
        <PortfolioHero />
        <PortfolioGrid />
        <CTASection />
      </div>
    </>
  );
};

export default PortfolioPage;