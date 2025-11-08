"use client";
import { useParams, useRouter } from "next/navigation";
import { slugify } from "@/lib/slugify";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { currentJob, jobs } from "@/services/Constants";
import ApplyModal from "./_components/ApplyModal";
import RelatedJobs from "./_components/RelatedJobs";
import JobDetailsContent from "./_components/JobDetailsContent";
import JobHeader from "./_components/JobHeader";


const JobDetailsPage: React.FC = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);

  // 👇 Scroll to top when the slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Find the job based on slug
  const job = jobs.find((j) => slugify(j.title) === slug);

  if (!job) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Job not found</h2>
        <Button onClick={() => router.push("/career")}>Go Back</Button>
      </div>
    );
  }

  // Related Jobs (same category)
  const relatedJobs = jobs.filter(
    (j) => j.category === job.category && j.id !== job.id
  );
  return (
    <>
      <title>{`${job.title} - Leads To Company`}</title>
      <meta name="description" content={job.description} />
      <meta
        name="keywords"
        content={`${job.title}, ${job.category}, job opening, career opportunity`}
      />
      <meta property="og:title" content={`${job.title} - TechSolutions`} />
      <meta property="og:description" content={job.description} />
      <meta property="og:type" content="article" />

      <div className="min-h-screen bg-white">
        <JobHeader job={job} setShowModal={setShowModal} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <JobDetailsContent
              currentJob={currentJob}
              job={job}
              setShowModal={setShowModal}
            />
          </div>
        </div>

        <RelatedJobs relatedJobs={relatedJobs} />
      </div>

      <ApplyModal
        open={showModal}
        onClose={() => setShowModal(false)}
        jobId={job.id}
        jobTitle={job.title}
      />
    </>
  );
};

export default JobDetailsPage;
