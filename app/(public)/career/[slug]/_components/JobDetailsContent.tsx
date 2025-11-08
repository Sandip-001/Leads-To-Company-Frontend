"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Clock,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Job, JobDetail } from "@/services/Constants";

const JobDetailsContent: React.FC<{
  job: Job;
  currentJob: JobDetail;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ job, currentJob, setShowModal }) => {
  return (
    <div className="space-y-8">
      {/* Job Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Job Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Employment Type</p>
                  <p className="font-semibold text-gray-900">
                    {currentJob.employmentType}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Work place Type</p>
                  <p className="font-semibold text-gray-900">
                    {currentJob.workplaceType}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Salary</p>
                  <p className="font-semibold text-gray-900">
                    {currentJob.salary}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-orange-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experience Required</p>
                  <p className="font-semibold text-gray-900">
                    {currentJob.experienceRequired}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Primary Responsibility */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prose prose-lg max-w-none"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Primary Responsibility:
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {currentJob.primaryResponsibility}
        </p>
      </motion.div>

      <Separator />

      {/* Job Specification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Job Specification:
        </h2>
        <div className="space-y-3">
          {currentJob.jobSpecifications.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <CheckCircle
                className="text-green-500 flex-shrink-0 mt-1"
                size={20}
              />
              <p className="text-gray-700 leading-relaxed">{spec}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Separator />

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          What We Offer:
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {currentJob.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
            >
              <Award className="text-blue-600 flex-shrink-0" size={20} />
              <p className="font-medium text-gray-900">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Apply Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Ready to Join Our Team?
        </h3>
        <p className="text-blue-100 mb-6 text-lg">
          Submit your application today and take the next step in your career!
        </p>
        <Button
          size="lg"
           onClick={()=> setShowModal(true)} 
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
        >
          Apply Now
        </Button>
      </motion.div>

      {/* Share */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-8 border-t border-gray-200"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Share this job</h3>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Facebook size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
          >
            <Twitter size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
          >
            <Linkedin size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <Link2 size={20} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default JobDetailsContent;
