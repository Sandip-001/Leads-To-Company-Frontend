"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobs } from "@/services/Constants";
import { slugify } from "@/lib/slugify";
import { useRouter } from "next/navigation";

const JobsSection: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [jobs, searchQuery, selectedCategory]);

  // ✅ Pagination: fix invalid page here directly
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const validPage = Math.min(currentPage, totalPages || 1);
  const startIndex = (validPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  // ✅ Replace fixed categories array
  const categories = useMemo(() => {
    const unique = Array.from(new Set(jobs.map((job) => job.category)));
    return ["All", ...unique];
  }, [jobs]);

  // ✅ Add this useEffect below pagination logic
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // ✅ Scroll to jobs section when page changes
  /*useEffect(() => {
    const section = document.getElementById("jobs-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);*/

  return (
    <section
      id="jobs-section"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            COME JOIN US
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Career Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're always looking for creative, talented self-starters to join
            the JMC family. Check out our open roles below and fill out an
            application.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <Input
                    type="text"
                    placeholder="Search by job title, experience, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="h-12 w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Job Count */}
        <div className="mb-6 text-gray-600">
          Showing {currentJobs.length} of {filteredJobs.length} jobs
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 mb-12">
          <AnimatePresence mode="wait">
            {currentJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl group">
                  {/* Decorative gradient bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                  <CardContent className="p-6 sm:p-8">
                    {/* Header: Job Title + Badges */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {job.category}
                        </Badge>
                        <Badge variant="outline" className="border-gray-300">
                          {job.type}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {job.description}
                      </p>
                    </div>

                    {/* Info Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-blue-500" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-purple-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-pink-500" />
                        <span>{job.deadline}</span>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="mt-8">
                      <Button
                        onClick={() =>
                          router.push(`/career/${slugify(job.title)}`)
                        }
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-transform group-hover:scale-105"
                      >
                        View Details <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {currentJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600">
              No jobs found matching your criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-2 flex-wrap"
          >
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page ? "bg-blue-600 hover:bg-blue-700" : ""
                }
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default JobsSection;
