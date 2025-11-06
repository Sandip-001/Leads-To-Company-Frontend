"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { blogPosts } from '@/services/Constants';


const FeaturedBlogs: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Featured Posts
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Our most popular and trending articles
          </p>
        </motion.div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{ loop: true }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {featuredPosts.map((post) => (
              <CarouselItem key={post.id}>
                <Card className="border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-96 overflow-hidden group">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-6 line-clamp-3 text-lg">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{post.author.name}</p>
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={14} />
                                {post.readTime}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Read More <ArrowRight size={18} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedBlogs