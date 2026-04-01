import {  useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import {FloatingFeature} from "@/components/Floatingfeature"

import { useToast } from "@/hooks/use-toast";
import { 
  Users, Stethoscope, TestTube, BedDouble,  BarChart3,Calendar,ArrowRight,
  ChevronDown,
} from "lucide-react";

 export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Animated background layers */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-white dark:from-blue-950 dark:via-purple-950 dark:to-pink-950"
      />
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div 
        style={{ y: y3, opacity, scale }}
        className="relative h-full flex flex-col items-center justify-center px-6 text-center"
      >
      {/*
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-full border border-white/20"
          data-testid="badge-next-gen"
        >
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Next-Generation Hospital Management
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          data-testid="heading-hmsync"
        >
          HMSync
        </motion.h1>
8*/}

  <FloatingFeature
    icon={Users}
    title="Patient Management"
    className="top-40 left-20"
  />

  <FloatingFeature
    icon={Stethoscope}
    title="Doctor Management"
    className="top-40 right-24"
  />

  <FloatingFeature
    icon={Calendar}
    title="OPD Management"
    className="top-[55%] left-16"
  />

  <FloatingFeature
    icon={TestTube}
    title="Pathology Lab"
    className="top-[55%] right-20"
  />

  <FloatingFeature
    icon={BedDouble}
    title="In-Patient Admissions"
    className="bottom-12 left-20"
  />

  <FloatingFeature
    icon={BarChart3}
    title="Analytics & Reports"
    className="bottom-12 right-20"
  />


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-10 text-gray-900 dark:text-white max-w-4xl px-4 mt-40 "
          data-testid="heading-tagline"
        >
          Advanced Control. Owner-First.{" "}
          <span className="bg-[#5F9DF7] bg-clip-text text-transparent">
            Fully Customizable.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-400 dark:text-gray-300 mb-12 max-w-3xl leading-relaxed px-4"
          data-testid="text-description"
        >
          The complete hospital management system designed for modern healthcare facilities. 
          Take control with advanced features, customizable workflows, and unparalleled flexibility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 px-4"
        >
          <Button 
            size="lg" 
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-[#FF731D] hover:shadow-2xl text-white shadow-2xl shadow-blue-500/50 dark:shadow-blue-400/30 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-request-demo"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 bg-[#5F9DF7] dark:bg-black/40 backdrop-blur-md hover:bg-white dark:hover:bg-black/60"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-explore-features"
          >
            Explore Features
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
