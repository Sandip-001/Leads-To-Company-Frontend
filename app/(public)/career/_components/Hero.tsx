"use client"
import React, {  } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CareerHero: React.FC = () => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] mt-16 sm:mt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
              JOIN US
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              JOIN US
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold">
                Join the team
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-800 px-8 py-6 text-lg font-semibold">
                Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero