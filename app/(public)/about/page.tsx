import { Metadata } from "next";
import AboutHero from "./_components/AboutHero";
import CoreValues from "./_components/CoreValues";
import CTASection from "./_components/CTA";
import ImageGallery from "./_components/ImageGallery";
import MissionVision from "./_components/Mission";
import OurStory from "./_components/OurStory";
import OurTeam from "./_components/OurTeam";
import Timeline from "./_components/TimeLine";

export const metadata: Metadata = {
  title: "About Us - Leads To Company | Leading IT Solutions Provider",
  description: "Learn about Leads To Company, a leading IT company with 10+ years of experience delivering innovative technology solutions. Discover our mission, values, and the team behind our success.",
};

const AboutUsPage: React.FC = () => {
  return (
    <>
      
      <div className="min-h-screen bg-white">
        <AboutHero />
        <OurStory />
        <MissionVision />
        <CoreValues />
        <Timeline />
        <OurTeam />
        <ImageGallery />
        <CTASection />
      </div>
    </>
  );
};

export default AboutUsPage;