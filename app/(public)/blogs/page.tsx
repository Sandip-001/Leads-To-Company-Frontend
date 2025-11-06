import { Metadata } from "next";
import AllBlogs from "./_components/AllBlogs"
import FeaturedBlogs from "./_components/FeaturedBlogs"
import BlogsHero from "./_components/Hero"

export const metadata: Metadata = {
  title: "Blog - Leads To Company | Latest Tech Insights & Articles",
  description: "Read the latest technology insights, tutorials, and industry trends from Leads To Company. Stay informed with our expert blog posts on web development, AI, cloud computing, and more.",
};

// Main Blogs Page
const BlogsPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <BlogsHero />
        <FeaturedBlogs />
        <AllBlogs />
      </div>
      </>
    )
  }

  export default BlogsPage