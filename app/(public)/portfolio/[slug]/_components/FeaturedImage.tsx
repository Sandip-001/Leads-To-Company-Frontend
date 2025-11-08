"use client"
import { motion } from 'framer-motion';
import { Project, ProjectDetail } from '@/services/Constants';


// Featured Image
const FeaturedImage: React.FC<{ currentProject: Project }> = ({ currentProject }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedImage