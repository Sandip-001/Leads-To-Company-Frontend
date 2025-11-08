import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const CertificationsComponent: React.FC = () => {
  const achievements = [
    { icon: <Award size={24} />, label: "Quality Assured", value: "100%" },
    { icon: <Users size={24} />, label: "Happy Clients", value: "200+" },
    { icon: <TrendingUp size={24} />, label: "Success Rate", value: "98%" },
    { icon: <Globe size={24} />, label: "Global Reach", value: "25+" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-lg"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
            Our Credentials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Certified Excellence
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Committed to delivering world-class quality through internationally
            recognized standards
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* MSME Certificate */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-0 shadow-2xl bg-white overflow-hidden group h-full">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Certificate Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Logo Area */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 flex items-center justify-center min-h-[280px]">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-center"
                    >
                      {/* MSME Logo Placeholder - Replace with actual logo */}
                      <Image
                        src="/msme-logo.png"
                        alt="MSME Certified"
                        width={300}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      MSME Certified
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Officially registered under the Micro, Small & Medium
                      Enterprises (MSME) Development Act. This certification
                      validates our commitment to excellence and enables us to
                      serve businesses with enhanced credibility.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                      <CheckCircle size={18} />
                      <span>Government Recognized</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ISO 9001:2015 Certificate */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-0 shadow-2xl bg-white overflow-hidden group h-full">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Certificate Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Logo Area */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 flex items-center justify-center min-h-[280px]">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-center"
                    >
                      {/* ISO Logo Placeholder - Replace with actual logo */}
                     <Image
                        src="/iso-logo.png"
                        alt="ISO Certified"
                        width={130}
                        height={130}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      ISO 9001:2015 Certified
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Internationally recognized Quality Management System
                      certification. This standard ensures we consistently
                      provide products and services that meet customer and
                      regulatory requirements through effective quality
                      management processes.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                      <CheckCircle size={18} />
                      <span>International Standard</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Why It Matters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 max-w-5xl mx-auto mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            What This Means for You
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield size={32} />,
                title: "Quality Assurance",
                description:
                  "Guaranteed adherence to international quality standards",
              },
              {
                icon: <Award size={32} />,
                title: "Trust & Credibility",
                description: "Verified compliance with regulatory requirements",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Continuous Improvement",
                description: "Committed to ongoing process optimization",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <div className="flex justify-center text-white mb-3">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {achievement.value}
              </div>
              <div className="text-blue-200 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsComponent;
