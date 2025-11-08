"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Job } from "@/services/Constants";

const JobHeader: React.FC<{
  job: Job;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ job, setShowModal }) => {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Subtle animated gradient orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />

      {/* Noise/Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Category Badge */}
          <Badge className="mt-30 mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-1 text-sm tracking-wide">
            {job.category}
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            {job.title}
          </h1>

          {/* Subtitle / short description */}
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our dynamic team and help shape the future — your skills can
            make a real impact.
          </p>

          {/* Job Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
            {[
              { icon: MapPin, label: "Location", value: job.location },
              { icon: Clock, label: "Experience", value: job.experience },
              { icon: Briefcase, label: "Job Type", value: job.type },
              { icon: Calendar, label: "Deadline", value: job.deadline },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-[1.03] transition-transform"
              >
                <div className="flex items-center justify-center gap-3">
                  <item.icon size={22} className="text-pink-300" />
                  <div className="text-left">
                    <p className="text-xs text-white/70 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Apply Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => setShowModal(true)}
              className="bg-white mb-10 text-purple-700 hover:bg-purple-100 font-semibold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Apply Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobHeader;
