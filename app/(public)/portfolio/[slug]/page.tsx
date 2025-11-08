"use client"
import { allProjects, currentProject } from "@/services/Constants";
import FeaturedImage from "./_components/FeaturedImage";
import ProjectHero from "./_components/Hero";
import ProjectOverview from "./_components/ProjectOverview";
import GallerySection from "./_components/Gallery";
import FeaturesSection from "./_components/Features";
import FAQSection from "./_components/FAQ";
import ShareSection from "./_components/Share";
import RelatedProjects from "./_components/RelatedProjects";
import CTASection from "../_components/CTA";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { slugify } from "@/lib/slugify";
import { Button } from "@/components/ui/button";



// Main Product Details Page
const ProductDetailsPage: React.FC = () => {
    const { slug } = useParams();
  const router = useRouter();

  // 👇 Scroll to top when the slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Find the project based on slug
  const project = allProjects.find((p) => slugify(p.title) === slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
        <Button onClick={() => router.push("/portfolio")}>Go Back</Button>
      </div>
    );
  }

  // Related Jobs (same category)
  const relatedProjects = allProjects.filter(
    (p) => p.category === project.category && p.id !== project.id
  );
  
  return (
    <>
      <title>{`${project.title} - Leads To Company`}</title>
      <meta name="description" content={project.description} />
      <meta name="keywords" content={project.tags.join(', ')} />
      <meta property="og:title" content={`${project.title} - Leads To Company`} />
      <meta property="og:description" content={project.description} />
      <meta property="og:image" content={project.image} />
      <meta property="og:type" content="article" />

      <div className="min-h-screen bg-white">
        <ProjectHero project={currentProject} currentProject={project} />
        <FeaturedImage currentProject={project} />
        <ProjectOverview project={currentProject} />
        <GallerySection project={currentProject} />
        <FeaturesSection project={currentProject} />
        <FAQSection />
        <ShareSection />
        <RelatedProjects relatedProjects = {relatedProjects}/>
        <CTASection />
      </div>
    </>
  );
};

export default ProductDetailsPage;