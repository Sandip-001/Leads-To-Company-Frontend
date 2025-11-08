"use client"
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/slugify";
import { currentService, services } from "@/services/Constants";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import ServiceHero from "./_components/Hero";
import OverviewSection from "./_components/Overview";
import FeaturesSection from "./_components/Feature";
import ProcessSection from "./_components/Process";
import PricingSection from "./_components/Pricing";
import CaseStudiesSection from "./_components/CaseStudy";
import FAQSection from "./_components/FAQ";
import RelatedServicesSection from "./_components/RelatedService";
import CTASection from "../_components/CTA";


// Main Service Details Page
const ServiceDetailsPage: React.FC = () => {
    const { slug } = useParams();
  const router = useRouter();

  // 👇 Scroll to top when the slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Find the job based on slug
  const service = services.find((s) => slugify(s.title) === slug);

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Service not found</h2>
        <Button onClick={() => router.push("/services")}>Go Back</Button>
      </div>
    );
  }

  
  return (
    <>
      <title>{`${service.title} - Leads To Company`}</title>
      <meta name="description" content={service.description} />
      <meta name="keywords" content={`${service.title}, ${currentService.category}, IT services, technology solutions`} />
      <meta property="og:title" content={`${service.title} - Leads To Company`} />
      <meta property="og:description" content={service.description} />
      <meta property="og:type" content="website" />

      <div className="min-h-screen bg-white">
        <ServiceHero service={currentService} serviceOrg={service} />
        <OverviewSection service={currentService} />
        <FeaturesSection service={currentService} />
        <ProcessSection service={currentService} />
        <PricingSection service={currentService} />
        <CaseStudiesSection service={currentService} />
        <FAQSection service={currentService} />
        <RelatedServicesSection />
        <CTASection />
      </div>
    </>
  );
};

export default ServiceDetailsPage;