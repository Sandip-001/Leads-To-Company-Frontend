"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { blogPosts } from "@/services/Constants";

const AllBlogs: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const visiblePosts = blogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < blogPosts.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 9);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Post
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore all our articles and stay informed
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visiblePosts.map((post, index) => {
            const slug = slugify(post.title);
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blogs/${post.id}/${slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 cursor-pointer">
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white">
                        {post.category}
                      </Badge>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-base mb-4 line-clamp-2">
                        {post.excerpt}
                      </CardDescription>

                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-gray-900">
                            {post.author.name}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                />
              ) : (
                "View All Post"
              )}
            </Button>
          </motion.div>
        )}

        {!hasMore && blogPosts.length > 10 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 text-lg font-medium">
              🎉 You've viewed all {blogPosts.length} blog posts!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AllBlogs;
