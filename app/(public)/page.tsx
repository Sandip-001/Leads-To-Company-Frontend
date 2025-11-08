"use client"

import AboutCompany from "./_homeComponents/AboutCompany";
import CertificationsComponent from "./_homeComponents/Certifications";
import ClientReviews from "./_homeComponents/ClientReview";
import Contact from "./_homeComponents/Contact";
import HeroBanner from "./_homeComponents/HeroBanner";
import LatestBlogsComponent from "./_homeComponents/LatestBlogs";
import LatestProducts from "./_homeComponents/LatestProducts";
import Services from "./_homeComponents/Services";
import TechSkillsSlider from "./_homeComponents/TechSkillsSlider";
import VideoTestimonialsComponent from "./_homeComponents/VideoTestimonial";
import WhoWeAre from "./_homeComponents/WhoWeAre";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <TechSkillsSlider />
      <CertificationsComponent />
      <AboutCompany />
      <WhoWeAre />
      <ClientReviews />
      <Services />
      <LatestProducts />
      <VideoTestimonialsComponent />
      <LatestBlogsComponent />
      <Contact />
    </div>
  );
};

export default HomePage