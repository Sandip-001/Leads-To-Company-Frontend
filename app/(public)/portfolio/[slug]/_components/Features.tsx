"use client"
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProjectDetail } from '@/services/Constants';



// Features & Technologies
const FeaturesSection: React.FC<{ project: ProjectDetail }> = ({ project }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Key Features
              </h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge className="text-base px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={project.testimonial.avatar}
                          alt={project.testimonial.author}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <p className="font-bold text-gray-900">{project.testimonial.author}</p>
                          <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic leading-relaxed">
                        "{project.testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection