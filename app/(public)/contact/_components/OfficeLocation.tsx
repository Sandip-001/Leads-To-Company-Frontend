"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { offices } from "@/services/Constants"; // your office data

const OfficeLocations: React.FC = () => {
  const handleGetDirections = (address: string) => {
    // encode the destination address for URL
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodedAddress}`;
    window.open(mapsUrl, "_blank");
  };

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
            Our Office Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our offices. We'd love to meet you in person!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-xl border-0 h-full">
                <div className="relative h-64 sm:h-80">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {office.name}
                      </CardTitle>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-600">{office.address}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone size={20} className="text-blue-600 flex-shrink-0" />
                          <p className="text-gray-600">{office.phone}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail size={20} className="text-blue-600 flex-shrink-0" />
                          <p className="text-gray-600">{office.email}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock size={20} className="text-blue-600 flex-shrink-0" />
                          <p className="text-gray-600">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                      {index === 0 ? "HQ" : "Branch"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => handleGetDirections(office.address)}
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
