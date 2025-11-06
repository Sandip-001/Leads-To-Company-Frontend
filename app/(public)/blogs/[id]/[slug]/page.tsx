import React from "react";
import Sidebar from "./_components/Sidebar";
import BlogContent from "./_components/BlogContent";
import { blogPosts } from "@/services/Constants";
import { Metadata } from "next";
import { slugify } from "@/lib/slugify";
import { notFound } from "next/navigation";

export interface BlogDetailData {
  content: string;
  tags: string[];
}

// Current Blog Detail Data
const currentBlogDetail: BlogDetailData = {
  content: `
    <p>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>

    <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>

    <h1>Research Your Destination</h1>
    <p>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

    <h2>Plan Your Itinerary</h2>
    <p>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid over-scheduling and ensure that you have time to relax and enjoy your journey.</p>

    <p>Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>

    <blockquote>"Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy."</blockquote>

    <h2>Pack Lightly and Smartly</h2>
    <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>

    <h2>Stay Safe and Healthy</h2>
    <p>Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>

    <h2>Immerse Yourself in the Local Culture</h2>
    <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>

    <h2>Capture Memories</h2>
    <p>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
  `,
  tags: ["Travel", "Technology", "Lifestyle", "Tips"],
};

type Props = {
  params: { id: string; slug: string };
};

// ✅ Dynamic metadata (per blog)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // ✅ Await the params
  const blog = blogPosts.find((b) => b.id === Number(resolvedParams.id));
  if (!blog) return { title: "Blog Not Found | TechSolutions" };

  return {
    title: `${blog.title} | Leads To Company`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

// Main Blog Details Page
const BlogDetailsPage = async ({ params }: Props) => {
  const resolvedParams = await params; // ✅ Await params
  const blog = blogPosts.find(
    (b) =>
      b.id === Number(resolvedParams.id) &&
      slugify(b.title) === resolvedParams.slug
  );

  if (!blog) return notFound();

  return (
    <>
      <div className="min-h-screen bg-white pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar - Left */}
            <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
              <Sidebar />
            </aside>

            {/* Main Content - Right */}
            <main className="lg:col-span-9">
              <BlogContent blog={blog} blogDetail={currentBlogDetail} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
