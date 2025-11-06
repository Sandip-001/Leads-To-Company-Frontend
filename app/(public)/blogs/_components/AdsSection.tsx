"use client"
import {motion} from "framer-motion"

const AdSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl p-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-2">Advertisement</p>
          <p className="text-gray-700 font-semibold text-lg">You can place ads</p>
          <p className="text-gray-600">750x100</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdSection