import { Metadata } from "next";
import BenefitsSection from "./_components/Benefits";
import CareerHero from "./_components/Hero";
import JobsSection from "./_components/JobsSection";


export const metadata: Metadata = {
  title: "Careers - Leads To Company | Join Our Team",
  description: "Join Leads To Company and be part of an innovative team. Explore our current job openings in engineering, design, marketing, and more. Build your career with us.",
};


// Main Careers Page
const CareersPage: React.FC = () => {
  return (
    <>

      <div className="min-h-screen bg-white">
        <CareerHero />
        <BenefitsSection />
        <JobsSection />
      </div>
    </>
  );
};

export default CareersPage;