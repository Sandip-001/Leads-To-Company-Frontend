"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/services/Constants";
import { slugify } from "@/lib/slugify";
import Link from "next/link";

const ServicesGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const visibleServices = services.slice(0, visibleCount);
  const hasMore = visibleCount < services.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 9, services.length));
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            What We Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Technology Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end solutions tailored
            to your unique business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/services/${slugify(service.title)}`}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 group overflow-hidden relative">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300" />

                    <CardContent className="p-8 relative">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-6xl mb-6 inline-block"
                      >
                        {service.icon}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      {service.features && (
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              <CheckCircle
                                className="text-green-500 flex-shrink-0"
                                size={16}
                              />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Button */}
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all font-semibold"
                      >
                        Learn More
                        <ArrowRight
                          size={18}
                          className="ml-2 group-hover:translate-x-2 transition-transform"
                        />
                      </Button>
                    </CardContent>

                    {/* Corner decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-gray-600 text-center">
              Showing {visibleCount} of {services.length} services
            </div>
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
                "Load More Services"
              )}
            </Button>
          </motion.div>
        )}

        {/* All Services Loaded */}
        {!hasMore && services.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 text-lg font-medium">
              🎉 You've viewed all {services.length} services!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
export default ServicesGrid;
