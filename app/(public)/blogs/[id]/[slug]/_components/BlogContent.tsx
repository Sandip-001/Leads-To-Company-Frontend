"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, Facebook, Twitter, Linkedin, Link2 as LinkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/services/Constants';
import { BlogDetailData } from '../page';


const BlogContent: React.FC<{ blogDetail: BlogDetailData, blog:BlogPost }> = ({ blog, blogDetail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">
          {blog.category}
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>
        
        {/* Author Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900">{blog.author.name}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div 
        className="prose prose-lg prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: blogDetail.content }}
      />

      {/* Second Image */}
      <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden my-8">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop"
          alt="Travel"
          className="w-full h-full object-cover"
        />
      </div>


      {/* Tags */}
      <div className="pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {blogDetail.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
              <Tag size={14} className="mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article</h3>
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
            <LinkIcon size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogContent