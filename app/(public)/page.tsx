"use client"

import AboutCompany from "./_homeComponents/AboutCompany";
import ClientReviews from "./_homeComponents/ClientReview";
import Contact from "./_homeComponents/Contact";
import HeroBanner from "./_homeComponents/HeroBanner";
import LatestProducts from "./_homeComponents/LatestProducts";
import Services from "./_homeComponents/Services";
import TechSkillsSlider from "./_homeComponents/TechSkillsSlider";
import WhoWeAre from "./_homeComponents/WhoWeAre";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <TechSkillsSlider />
      <AboutCompany />
      <WhoWeAre />
      <ClientReviews />
      <Services />
      <LatestProducts />
      <Contact />
    </div>
  );
};

export default HomePage