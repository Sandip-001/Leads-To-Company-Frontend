import { techSkills } from "@/services/Constants";
import {motion} from "framer-motion"

// Tech Skills Slider Component
const TechSkillsSlider: React.FC = () => {
  const duplicatedSkills = [...techSkills, ...techSkills];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technologies We Master
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expertise in cutting-edge technologies to build robust solutions
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: [0, -50 * techSkills.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-8"
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.id}-${index}`}
              whileHover={{ scale: 1.1, y: -10 }}
              className="flex-shrink-0 w-32 h-32 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center gap-3 border border-gray-100"
            >
              <span className="text-4xl">{skill.logo}</span>
              <span className="font-semibold text-gray-800">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechSkillsSlider