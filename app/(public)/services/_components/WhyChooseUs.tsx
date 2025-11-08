"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';


// Why Choose Us Section
const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: "🏆",
      title: "Expert Team",
      description: "Industry-leading professionals with years of experience"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Agile methodology ensures quick turnaround times"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Cutting-edge solutions using the latest technologies"
    },
    {
      icon: "🤝",
      title: "24/7 Support",
      description: "Round-the-clock assistance for your peace of mind"
    }
  ];

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
            Why Choose Leads To Company?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="text-center h-full border-0 shadow-lg hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs