"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Link2 as LinkIcon, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { slugify } from "@/lib/slugify";
import { blogPosts } from '@/services/Constants';

// Dummy Data
const categories = [
  "Technology",
  "Web Development",
  "Mobile Apps",
  "AI & ML",
  "Cloud Computing",
  "Cybersecurity",
  "DevOps"
];


const Sidebar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);
  const [showMoreTrending, setShowMoreTrending] = useState(false);

  const filteredBlogs = selectedCategory
    ? blogPosts.filter(blog => blog.category === selectedCategory)
    : blogPosts;

  const filteredTrending = selectedCategory
  ? blogPosts.filter(
      (blog) => blog.category === selectedCategory && blog.featured === true
    )
  : blogPosts.filter((blog) => blog.featured === true);

  const displayedBlogs = showMoreBlogs ? filteredBlogs : filteredBlogs.slice(0, 4);
  const displayedTrending = showMoreTrending ? filteredTrending : filteredTrending.slice(0, 2);

  return (
    <div className="space-y-8">
      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* For You Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-blue-600">For you</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {displayedBlogs.map((blog, index) => (
              <Link key={blog.id} href={`/blogs/${blog.id}/${slugify(blog.title)}`}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 cursor-pointer group"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{blog.readTime}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
            {filteredBlogs.length > 4 && (
              <Button
                variant="ghost"
                className="w-full text-blue-600 hover:text-blue-700"
                onClick={() => setShowMoreBlogs(!showMoreBlogs)}
              >
                {showMoreBlogs ? 'Show Less' : 'Load More'}
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Trending Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Trending</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {displayedTrending.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.id}/${slugify(blog.title)}`}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="pb-4 border-b border-gray-100 last:border-0 cursor-pointer group"
                >
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-5 h-5 rounded-full"
                    />
                    <span>{blog.author.name}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
            {filteredTrending.length > 2 && (
              <Button
                variant="ghost"
                className="w-full text-blue-600 hover:text-blue-700"
                onClick={() => setShowMoreTrending(!showMoreTrending)}
              >
                {showMoreTrending ? 'Show Less' : 'Load More'}
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Categories Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recommended topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            {selectedCategory && (
              <Button
                variant="ghost"
                className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700"
                onClick={() => setSelectedCategory(null)}
              >
                Clear Filter
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Sidebar