"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Job } from "@/services/Constants";
import { slugify } from "@/lib/slugify";

const RelatedJobs: React.FC<{ relatedJobs: Job[] }> = ({ relatedJobs }) => {
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Related Job Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore similar positions that might interest you
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/career/${slugify(job.title)}`}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 group cursor-pointer">
                  <CardHeader className="pb-3">
                    <Badge className="w-fit mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                      {job.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase size={16} />
                      <span>{job.type}</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600"
                    >
                      View Details <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/career">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold"
            >
              View All Openings <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedJobs;
