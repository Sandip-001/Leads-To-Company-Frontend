"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Shield, Zap } from 'lucide-react';
import { ServiceDetail } from '@/services/Constants';



const OverviewSection: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Service Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {service.longDescription}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Shield className="text-blue-600" />, text: "Secure & Reliable" },
                { icon: <Zap className="text-purple-600" />, text: "Fast Performance" },
                { icon: <Award className="text-green-600" />, text: "Quality Assured" },
                { icon: <Users className="text-orange-600" />, text: "Expert Team" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  {item.icon}
                  <span className="font-semibold text-gray-900">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
              alt="Service"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection