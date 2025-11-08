import { Metadata } from "next";
import ContactFormSection from "./_components/ContactForm";
import FAQSection from "./_components/FAQ";
import ContactHero from "./_components/Hero";
import OfficeLocations from "./_components/OfficeLocation";

export const metadata: Metadata = {
  title: "Contact Us - Leads To Company | Get In Touch",
  description: "Get in touch with Leads To Company. Visit our offices in San Francisco and New York, or send us a message. We're here to help with your technology needs.",
};


// Main Contact Page
const ContactUsPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <ContactHero />
        <ContactFormSection />
        <OfficeLocations />
        <FAQSection />
      </div>
    </>
  );
};

export default ContactUsPage;