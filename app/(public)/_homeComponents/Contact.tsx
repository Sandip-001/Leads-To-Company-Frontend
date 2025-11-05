"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

// Contact Component
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-20 mx-5 mb-5 border rounded-4xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Lorem Ipsum is simply do text of the printing and
              </h3>
            </div>

            {/* Location */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center">
                <MapPin size={28} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Address
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center">
                <Phone size={28} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Phone
                </h4>
                <a href="tel:+01234567890" className="text-blue-100 hover:text-white transition-colors text-lg">
                  +0 123-456-7890
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center">
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Email
                </h4>
                <a href="mailto:in@loremgmail.com" className="text-blue-100 hover:text-white transition-colors text-lg">
                  in@loremgmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 bg-white/95 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-white/95 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-3 bg-white/95 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-white/95 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/95 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Your Ends
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact