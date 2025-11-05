import {motion} from "framer-motion"

// Who We Are Component
const WhoWeAre: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-12 leading-relaxed"
          >
            We are a passionate team of innovators, creators, and problem-solvers dedicated to transforming ideas into reality. Our mission is to empower businesses with cutting-edge technology solutions that drive growth and create lasting impact.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "We embrace new technologies and methodologies to stay ahead" },
              { title: "Client-Centric", desc: "Your success is our success, and we work tirelessly to achieve it" },
              { title: "Excellence Always", desc: "We maintain the highest standards in everything we deliver" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre