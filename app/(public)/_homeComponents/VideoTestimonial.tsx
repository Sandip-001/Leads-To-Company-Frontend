"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { videoTestimonials } from '@/services/Constants';



const VideoTestimonialsComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentTestimonial = videoTestimonials[currentIndex];

  // Auto-slide when video ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      handleNext();
    };

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentIndex]);

  // Reset video when changing testimonial
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      setIsPlaying(false);
      setProgress(0);
    }
  }, [currentIndex]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-15 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from real clients who trusted us with their projects
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Video Player */}
                <div className="relative">
                  <Card className="overflow-hidden border-0 shadow-2xl">
                    <div className="relative aspect-video bg-black group">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        poster={currentTestimonial.thumbnail}
                        playsInline
                      >
                        <source src={currentTestimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Play/Pause Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePlayPause}
                            className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl"
                          >
                            {isPlaying ? (
                              <Pause className="text-blue-600" size={32} />
                            ) : (
                              <Play className="text-blue-600 ml-1" size={32} />
                            )}
                          </motion.button>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-white/30 rounded-full mb-3 overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <button
                            onClick={handlePlayPause}
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                          </button>

                          <button
                            onClick={handleMuteToggle}
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                          </button>
                        </div>
                      </div>

                      {/* Client Badge Overlay */}
                      <div className="absolute top-4 left-4 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <img
                          src={currentTestimonial.clientImage}
                          alt={currentTestimonial.clientName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="pr-2">
                          <p className="font-bold text-gray-900 text-sm">{currentTestimonial.clientName}</p>
                          <p className="text-xs text-gray-600">{currentTestimonial.clientCompany}</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Testimonial Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="border-0 shadow-xl bg-white">
                      <CardContent className="p-8">
                        {/* Quote Icon */}
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                          <Quote className="text-blue-600" size={32} />
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-6">
                          {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <svg className="w-6 h-6 fill-yellow-400" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            </motion.div>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                          "{currentTestimonial.description}"
                        </p>

                        {/* Client Info */}
                        <div className="border-t border-gray-200 pt-6">
                          <div className="flex items-center gap-4">
                            <img
                              src={currentTestimonial.clientImage}
                              alt={currentTestimonial.clientName}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg">
                                {currentTestimonial.clientName}
                              </h4>
                              <p className="text-gray-600">
                                {currentTestimonial.clientPosition}
                              </p>
                              <p className="text-sm text-blue-600 font-semibold">
                                {currentTestimonial.clientCompany}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-12 h-3 bg-blue-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Manual Navigation Buttons (Mobile) */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <ChevronLeft size={20} />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              Next
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsComponent;