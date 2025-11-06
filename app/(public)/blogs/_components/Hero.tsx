"use client"
import React, {  } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const BlogsHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
            Our Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Latest Insights & Stories
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Stay updated with the latest trends, tips, and technology insights from our experts
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsHero