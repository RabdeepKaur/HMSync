import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  Stethoscope, 
  TestTube, 
  BedDouble, 
  FileText, 
  Shield, 
  Database, 
  BarChart3,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  Lock,
  Settings,
  ChevronDown,
  Home,
  Star,
  MessageSquare,
  Quote
} from "lucide-react";
import testimonials from "@/data/testimonials.json";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  hospitalName: z.string().min(2, "Hospital name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient registration, records, and history tracking with advanced search capabilities",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Stethoscope,
    title: "Doctor Management",
    description: "Comprehensive doctor profiles, schedules, earnings tracking, and performance analytics",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "OPD Management",
    description: "Streamline outpatient appointments, consultations, and follow-ups with automated reminders",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TestTube,
    title: "Pathology Lab",
    description: "Order tests, track results, generate reports, and integrate with lab equipment seamlessly",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BedDouble,
    title: "In-Patient Admissions",
    description: "Manage admissions, room transfers, discharges, and bed allocation with real-time updates",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: FileText,
    title: "Billing & Payments",
    description: "Comprehensive billing with multiple payment methods, insurance claims, and financial reporting",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Real-time insights, financial summaries, occupancy rates, and customizable dashboards",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "Audit Logs",
    description: "Complete activity tracking for compliance, security, and operational transparency",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Backup & Restore",
    description: "Automated backups with one-click restore, ensuring your data is always protected",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Building2,
    title: "Multi-Location Support",
    description: "Manage multiple hospital branches from a unified platform with centralized oversight",
    color: "from-cyan-500 to-blue-500"
  },
];

function HeroSection() {
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
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950"
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

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white max-w-4xl px-4"
          data-testid="heading-tagline"
        >
          Advanced Control. Owner-First.{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Fully Customizable.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl leading-relaxed px-4"
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
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/50 dark:shadow-blue-400/30 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-request-demo"
          >
            Request a Demo
            <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 bg-white/60 dark:bg-black/40 backdrop-blur-md hover:bg-white dark:hover:bg-black/60"
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

function CardDrawFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Gradient background opacity
  const gradientOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.85, 1], [0, 1, 1, 0]);
  
  // Text transitions
  const textGradientOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const textWhiteOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // Cards fade out after drawing animation
  const cardsOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  // First heading transitions
  const heading1Y = useTransform(scrollYProgress, [0.7, 0.85], ["0vh", "-50vh"]);
  const heading1Opacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  // Second heading (immersive section) comes up from below
  const heading2Y = useTransform(scrollYProgress, [0.8, 0.95], ["100vh", "0vh"]);
  const heading2Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  // Calculate individual card animations - sequential reveal
  const getCardAnimation = (index: number) => {
    const totalCards = 10;
    // Each card appears 0.04 units after the previous one
    const startProgress = 0.15 + (index * 0.04);
    const revealProgress = startProgress + 0.03;
    const endProgress = revealProgress + 0.03;
    
    // Cards start invisible and stacked at center bottom
    const y = useTransform(scrollYProgress, 
      [startProgress, revealProgress, endProgress], 
      [100, 50, 0]
    );
    const x = useTransform(scrollYProgress, 
      [startProgress, revealProgress, endProgress], 
      [0, 0, (index - 4.5) * 65]
    );
    const rotate = useTransform(scrollYProgress, 
      [startProgress, revealProgress, endProgress], 
      [0, 0, (index - 4.5) * 4]
    );
    const scale = useTransform(scrollYProgress, 
      [startProgress, revealProgress, endProgress], 
      [0.7, 0.85, 1]
    );
    // Sharp opacity transition - hidden until it's time to reveal
    const opacity = useTransform(scrollYProgress, 
      [startProgress - 0.01, startProgress, revealProgress], 
      [0, 1, 1]
    );
    
    return { y, x, rotate, scale, opacity };
  };

  return (
    <section 
      ref={containerRef} 
      id="features" 
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* Fixed gradient background */}
      <motion.div 
        style={{ opacity: gradientOpacity }} 
        className="fixed inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 pointer-events-none" 
      />
      
      {/* Grid pattern overlay */}
      <motion.div 
        style={{ opacity: useTransform(gradientOpacity, [0, 1], [0, 0.2]) }} 
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
      </motion.div>

      <div className="sticky top-0 h-screen overflow-hidden flex flex-col py-12 relative z-10">
        {/* Heading section */}
        <motion.div 
          style={{ y: heading1Y, opacity: heading1Opacity }}
          className="container mx-auto px-6 mb-12"
        >
          <div className="text-center relative">
            <div className="relative">
              <motion.h2 
                style={{ opacity: textGradientOpacity }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                data-testid="heading-features"
              >
                Powerful Features
              </motion.h2>
              <motion.h2 
                style={{ opacity: textWhiteOpacity }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white absolute top-0 left-0 right-0"
              >
                Powerful Features
              </motion.h2>
            </div>
            
            <div className="relative">
              <motion.p 
                style={{ opacity: textGradientOpacity }}
                className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" 
                data-testid="text-features-desc"
              >
                Everything you need to run a modern hospital, all in one platform
              </motion.p>
              <motion.p 
                style={{ opacity: textWhiteOpacity }}
                className="text-sm md:text-base lg:text-lg text-white max-w-3xl mx-auto absolute top-0 left-0 right-0"
              >
                Everything you need to run a modern hospital, all in one platform
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Playing card draw animation */}
        <motion.div 
          style={{ opacity: cardsOpacity }} 
          className="flex-1 flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-7xl mx-auto h-[350px] md:h-[400px] flex items-center justify-center">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const animation = getCardAnimation(index);
              
              return (
                <motion.div
                  key={index}
                  style={{
                    x: animation.x,
                    y: animation.y,
                    rotate: animation.rotate,
                    scale: animation.scale,
                    opacity: animation.opacity,
                    position: 'absolute',
                    zIndex: index,
                  }}
                  className="w-[180px] md:w-[200px] lg:w-[220px]"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -25,
                    zIndex: 100,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Card className="h-[270px] md:h-[300px] lg:h-[330px] p-4 md:p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-2xl hover:shadow-3xl flex flex-col" data-testid={`card-feature-${index}`}>
                    <div className={`w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-3 shadow-lg flex-shrink-0`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold mb-2 text-gray-900 dark:text-white flex-shrink-0" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-snug flex-grow overflow-hidden" data-testid={`text-feature-desc-${index}`}>
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Immersive section */}
        <motion.div 
          style={{ y: heading2Y, opacity: heading2Opacity }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-5xl">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 text-white" data-testid="heading-immersive">
              Redefining{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Healthcare
              </span>
              {" "}Management
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-12" data-testid="text-immersive-desc">
              Bringing everything together in one powerful, customizable platform. 
              Unified workflows, real-time insights, and complete control.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2" data-testid="feature-unified">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
                <span className="text-lg">Fully Integrated Platform</span>
              </div>
              <div className="flex items-center gap-2" data-testid="feature-realtime">
                <CheckCircle2 className="w-6 h-6 text-purple-400" />
                <span className="text-lg">Real-Time Updates</span>
              </div>
              <div className="flex items-center gap-2" data-testid="feature-scalable">
                <CheckCircle2 className="w-6 h-6 text-pink-400" />
                <span className="text-lg">Infinitely Scalable</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



function WhyChooseSection() {
  const whyChoose = [
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Tailor every aspect to match your hospital's unique workflow and requirements",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Owner-First Control",
      description: "Complete control over your data, system configuration, and user management",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Advanced Features",
      description: "Role-based access, multi-user support, real-time updates, and powerful automation",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: "Modern Interface",
      description: "Beautiful, intuitive design with dark mode support that your staff will love using",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="why-choose" className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white" data-testid="heading-why-choose">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">HMSync</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4" data-testid="text-why-choose-desc">
            Built for hospital owners who demand excellence and control
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="p-6 md:p-8 lg:p-10 h-full bg-white dark:bg-gray-800 border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl" data-testid={`card-why-${index}`}>
                  <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${item.gradient} p-3 md:p-4 mb-4 md:mb-6 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white" data-testid={`text-why-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed" data-testid={`text-why-desc-${index}`}>
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <Card className="p-6 md:p-10 lg:p-12 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white max-w-4xl mx-auto shadow-2xl" data-testid="card-custom-quote">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" data-testid="heading-custom-pricing">Get Custom Pricing</h3>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90" data-testid="text-custom-pricing-desc">
              Every hospital is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-contact-sales"
            >
              Contact Sales
              <ArrowRight className="ml-2" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const topRowTestimonials = testimonials.slice(0, 4);
  const bottomRowTestimonials = testimonials.slice(4, 8);

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white" data-testid="heading-testimonials">
            Made for <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Healthcare Professionals</span>, Loved by Administrators
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4" data-testid="text-testimonials-desc">
            See how healthcare teams are transforming their operations with HMSync
          </p>
        </motion.div>
      </div>

      {/* Top Row - Scrolling Right to Left */}
      <div className="relative mb-6 md:mb-8">
        <div className="scroll-container group">
          <div className="scroll-content">
            {[...topRowTestimonials, ...topRowTestimonials].map((testimonial, index) => (
              <Card 
                key={`top-${index}`} 
                className="testimonial-card flex-shrink-0 w-[380px] md:w-[450px] p-8 md:p-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
                data-testid={`card-testimonial-top-${index}`}
              >
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 leading-relaxed" data-testid={`text-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-base" data-testid={`avatar-${index}`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm md:text-base" data-testid={`text-name-${index}`}>
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm" data-testid={`text-title-${index}`}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 flex items-center justify-center p-2">
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-xs text-center leading-tight">
                        {testimonial.organization.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row - Scrolling Left to Right */}
      <div className="relative">
        <div className="scroll-container-reverse group">
          <div className="scroll-content-reverse">
            {[...bottomRowTestimonials, ...bottomRowTestimonials].map((testimonial, index) => (
              <Card 
                key={`bottom-${index}`} 
                className="testimonial-card flex-shrink-0 w-[380px] md:w-[450px] p-8 md:p-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
                data-testid={`card-testimonial-bottom-${index}`}
              >
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 leading-relaxed" data-testid={`text-quote-bottom-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-base" data-testid={`avatar-bottom-${index}`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm md:text-base" data-testid={`text-name-bottom-${index}`}>
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm" data-testid={`text-title-bottom-${index}`}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 flex items-center justify-center p-2">
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-xs text-center leading-tight">
                        {testimonial.organization.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroll-container {
          display: flex;
          overflow: hidden;
          position: relative;
        }

        .scroll-content {
          display: flex;
          gap: 2rem;
          animation: scroll-left 53s linear infinite;
        }

        .scroll-container:hover .scroll-content {
          animation-play-state: paused;
        }

        .scroll-container-reverse {
          display: flex;
          overflow: hidden;
          position: relative;
        }

        .scroll-content-reverse {
          display: flex;
          gap: 2rem;
          animation: scroll-right 53s linear infinite;
        }

        .scroll-container-reverse:hover .scroll-content-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      hospitalName: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Demo Request Received!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent" data-testid="heading-contact">
            Request a Demo
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4" data-testid="text-contact-desc">
            See HMSync in action and discover how it can transform your hospital operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-5 md:p-6 h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2" data-testid="card-contact-info">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white" data-testid="heading-get-in-touch">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3" data-testid="contact-email">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2.5">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Email</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">sales@hmsync.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-phone">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5">
                    <Phone className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-location">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 p-2.5">
                    <MapPin className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Location</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Global Healthcare Solutions HQ</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/50 dark:bg-black/20 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 italic text-sm">
                  "HMSync has transformed how we manage our hospital. The customization options and 
                  real-time analytics have improved our efficiency by 40%."
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-3 font-semibold text-sm">
                  - Dr. Sarah Johnson, City General Hospital
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-5 md:p-6 bg-white dark:bg-gray-800 border-2" data-testid="card-contact-form">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-900 dark:text-white">Your Name *</label>
                  <Input
                    {...form.register("name")}
                    placeholder="John Doe"
                    className="text-base p-3 border-2 focus:border-blue-500"
                    data-testid="input-name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-500 mt-1" data-testid="error-name">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-900 dark:text-white">Email Address *</label>
                  <Input
                    {...form.register("email")}
                    type="email"
                    placeholder="john@hospital.com"
                    className="text-base p-3 border-2 focus:border-blue-500"
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500 mt-1" data-testid="error-email">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-900 dark:text-white">Hospital Name *</label>
                  <Input
                    {...form.register("hospitalName")}
                    placeholder="City General Hospital"
                    className="text-base p-3 border-2 focus:border-blue-500"
                    data-testid="input-hospital"
                  />
                  {form.formState.errors.hospitalName && (
                    <p className="text-sm text-red-500 mt-1" data-testid="error-hospital">{form.formState.errors.hospitalName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-900 dark:text-white">Phone Number *</label>
                  <Input
                    {...form.register("phone")}
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="text-base p-3 border-2 focus:border-blue-500"
                    data-testid="input-phone"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-500 mt-1" data-testid="error-phone">{form.formState.errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-gray-900 dark:text-white">Message *</label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="Tell us about your hospital's needs..."
                    className="min-h-[100px] text-base p-3 border-2 focus:border-blue-500 resize-none"
                    data-testid="input-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-500 mt-1" data-testid="error-message">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-base py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl"
                  data-testid="button-submit"
                >
                  Send Demo Request
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingNavbar() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#why-choose" },
    { label: "Demo", href: "#contact" },
    { label: "Pricing", href: "#why-choose" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-1 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl max-w-full">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-2 md:px-4 py-2 font-bold text-base md:text-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-300 dark:hover:to-purple-300 transition-all whitespace-nowrap"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          HMSync
        </motion.a>
        
        <div className="h-6 w-px bg-white/20 dark:bg-white/10 mx-1 md:mx-2" />
        
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.label}
            </motion.a>
          ))}
          
          <div className="h-6 w-px bg-white/20 dark:bg-white/10 mx-2" />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 md:px-5 py-2 rounded-lg text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transition-all duration-300 whitespace-nowrap"
          onClick={() => {
            const target = document.querySelector("#contact");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Request Demo
        </motion.button>
      </div>
    </motion.nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-testid="footer-brand">
              HMSync
            </h3>
            <p className="text-gray-400 text-base md:text-lg" data-testid="footer-description">
              Advanced hospital management for the modern age
            </p>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Contact</h4>
            <div className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <p data-testid="footer-email">sales@hmsync.com</p>
              <p data-testid="footer-phone">+1 (555) 123-4567</p>
              <p data-testid="footer-location">Global Healthcare Solutions</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Quick Links</h4>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-features">Features</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-contact">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p data-testid="footer-copyright">&copy; 2025 HMSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="relative">
      <ThemeToggle />
      <FloatingNavbar />
      <HeroSection />
      <CardDrawFeatures />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
