"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, User, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project, ProjectDetail } from "@/services/Constants";

const ProjectHero: React.FC<{ project: ProjectDetail; currentProject: Project }> = ({
  project,
  currentProject,
}) => {
  return (
    <section className="relative flex items-center justify-center text-center min-h-[90vh] bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Animated badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8 mt-14"
        >
          <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            {currentProject.category}
          </Badge>
          {currentProject.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/20"
            >
              {tag}
            </Badge>
          ))}
        </motion.div>

        {/* Project Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl"
        >
          {currentProject.title}
        </motion.h1>

        {/* Project Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl"
        >
          {currentProject.description}
        </motion.p>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12 text-white"
        >
          <div className="flex items-center gap-3">
            <User size={22} className="text-blue-200" />
            <div>
              <p className="text-xs text-blue-200 uppercase tracking-wide">Client</p>
              <p className="font-semibold">{project.client}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar size={22} className="text-blue-200" />
            <div>
              <p className="text-xs text-blue-200 uppercase tracking-wide">Date</p>
              <p className="font-semibold">{project.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Layers size={22} className="text-blue-200" />
            <div>
              <p className="text-xs text-blue-200 uppercase tracking-wide">Duration</p>
              <p className="font-semibold">{project.duration}</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 gap-2"
          >
            <ExternalLink size={22} />
            View Live Demo
          </Button>
        </motion.div>
      </div>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-blue-400/40 to-transparent blur-3xl" />
    </section>
  );
};

export default ProjectHero;