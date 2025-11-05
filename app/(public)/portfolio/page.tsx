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
      <title>Portfolio - TechSolutions | Our Success Stories & Projects</title>
      <meta
        name="description"
        content="Explore TechSolutions' portfolio of successful web design, web applications, and mobile app projects. View our curated collection of 30+ completed projects across various industries."
      />
      <meta name="keywords" content="portfolio, projects, web design, web development, mobile apps, case studies, success stories, client work" />
      <meta property="og:title" content="Portfolio - TechSolutions" />
      <meta property="og:description" content="Discover our curated collection of successful projects and client work" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <div className="min-h-screen bg-white">
        <PortfolioHero />
        <PortfolioGrid />
        <CTASection />
      </div>
    </>
  );
};

export default PortfolioPage;