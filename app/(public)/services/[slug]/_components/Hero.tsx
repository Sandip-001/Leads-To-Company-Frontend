"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Service, ServiceDetail } from '@/services/Constants';


// Hero Section
const ServiceHero: React.FC<{ service: ServiceDetail, serviceOrg:Service }> = ({ service, serviceOrg }) => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 text-9xl opacity-5"
      >
        {service.icon}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
            {service.category}
          </Badge>
          <div className="text-7xl mb-6">
            {serviceOrg.icon}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {serviceOrg.title}
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            {serviceOrg.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 hover:bg-gray-100 hover:text-blue-800 px-8 py-6 text-lg font-semibold">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { icon: <Users size={32} />, label: "Happy Clients", value: "200+" },
            { icon: <Award size={32} />, label: "Projects Done", value: "500+" },
            { icon: <TrendingUp size={32} />, label: "Success Rate", value: "98%" },
            { icon: <Clock size={32} />, label: "Avg. Delivery", value: "6 Weeks" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
            >
              <div className="flex justify-center text-white mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero