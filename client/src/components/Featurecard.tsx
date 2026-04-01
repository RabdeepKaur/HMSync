
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient registration, records, and history tracking with advanced search capabilities",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
  },
  {
    icon: Stethoscope,
    title: "Doctor Management",
    description: "Comprehensive doctor profiles, schedules, earnings tracking, and performance analytics",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop"
  },
  {
    icon: Calendar,
    title: "OPD Management",
    description: "Streamline outpatient appointments, consultations, and follow-ups with automated reminders",
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop"
  },
  {
    icon: TestTube,
    title: "Pathology Lab",
    description: "Order tests, track results, generate reports, and integrate with lab equipment seamlessly",
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
  },
  {
    icon: BedDouble,
    title: "In-Patient Admissions",
    description: "Manage admissions, room transfers, discharges, and bed allocation with real-time updates",
    color: "from-indigo-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
  },
  {
    icon: FileText,
    title: "Billing & Payments",
    description: "Comprehensive billing with multiple payment methods, insurance claims, and financial reporting",
    color: "from-teal-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Real-time insights, financial summaries, occupancy rates, and customizable dashboards",
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    icon: Shield,
    title: "Audit Logs",
    description: "Complete activity tracking for compliance, security, and operational transparency",
    color: "from-violet-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  },
  {
    icon: Database,
    title: "Backup & Restore",
    description: "Automated backups with one-click restore, ensuring your data is always protected",
    color: "from-amber-500 to-yellow-500",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
  },
  {
    icon: Building2,
    title: "Multi-Location Support",
    description: "Manage multiple hospital branches from a unified platform with centralized oversight",
    color: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
  },
];

const HospitalFeatureCards = () => {
  return (
    <div className="min-h-50% bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Everything you need to run a modern hospital, all in one platform
          </h1>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-slate-200"
              >
                <CardContent className="p-0 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-90`} />
                  <div className="relative h-29 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-white drop-shadow-lg" />
                  </div>
                </CardContent>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardFooter className="gap-3 pt-2">
                  <Button className="flex-1" size="sm">
                    Demo  Now
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Explore
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

    
      </div>
    </div>
  );
};

export default HospitalFeatureCards;



// function CardDrawFeatures() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   // Gradient background opacity
//   const gradientOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.85, 1], [0, 1, 1, 0]);
  
//   // Text transitions
//   const textGradientOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
//   const textWhiteOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

//   // Cards fade out after drawing animation
//   const cardsOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

//   // First heading transitions
//   const heading1Y = useTransform(scrollYProgress, [0.7, 0.85], ["0vh", "-50vh"]);
//   const heading1Opacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

//   // Second heading (immersive section) comes up from below
//   const heading2Y = useTransform(scrollYProgress, [0.8, 0.95], ["100vh", "0vh"]);
//   const heading2Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

//   // Calculate individual card animations - sequential reveal with fanning effect
//   const getCardAnimation = (index: number) => {
//     const totalCards = 10;
//     const centerIndex = (totalCards - 1) / 2; // 4.5 for 10 cards
//     const offsetFromCenter = index - centerIndex;
    
//     // Each card appears 0.03 units after the previous one
//     const startProgress = 0.15 + (index * 0.03);
//     const revealProgress = startProgress + 0.02;
//     const endProgress = revealProgress + 0.02;
    
//     // Cards come from below and fan out vertically
//     const y = useTransform(scrollYProgress, 
//       [startProgress, revealProgress, endProgress], 
//       [500, 0, Math.abs(offsetFromCenter) * 12] // Start from below (500px), move to center, then spread
//     );
    
//     // Cards fan out horizontally
//     const x = useTransform(scrollYProgress, 
//       [startProgress, revealProgress, endProgress], 
//       [0, 0, offsetFromCenter * 60] // Horizontal spread based on position
//     );
    
//     // Cards rotate based on their position from center
//     const rotate = useTransform(scrollYProgress, 
//       [startProgress, revealProgress, endProgress], 
//       [0, 0, offsetFromCenter * 4] // Rotation increases away from center
//     );
    
//     const scale = useTransform(scrollYProgress, 
//       [startProgress, revealProgress, endProgress], 
//       [0.95, 0.98, 1]
//     );
    
//     // Sharp opacity transition - hidden until it's time to reveal
//     const opacity = useTransform(scrollYProgress, 
//       [startProgress - 0.01, startProgress, revealProgress], 
//       [0, 1, 1]
//     );
    
//     return { y, x, rotate, scale, opacity };
//   };

//   return (
//     <section 
//       ref={containerRef} 
//       id="features" 
//       className="relative"
//       style={{ height: "400vh" }}
//     >
//       {/* Fixed gradient background */}
//       <motion.div 
//         style={{ opacity: gradientOpacity }} 
//         className="fixed inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 pointer-events-none" 
//       />
      
//       {/* Grid pattern overlay*/}
//       <motion.div 
//         style={{ opacity: useTransform(gradientOpacity, [0, 1], [0, 0.2]) }} 
//         className="fixed inset-0 pointer-events-none"
//       >
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
//       </motion.div>

//       <div className="top-0 h-screen overflow-hidden flex flex-col py-12 relative z-10">
//         {/* Heading section */}
//         <motion.div 
//           style={{ y: heading1Y, opacity: heading1Opacity }}
//           className="container mx-auto px-6 mb-12"
//         >
//           <div className="text-center relative">
//             <div className="relative">
//               <motion.h2 
//                 style={{ opacity: textGradientOpacity }}
//                 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
//                 data-testid="heading-features"
//               >
//                 Powerful Features
//               </motion.h2>
//               <motion.h2 
//                 style={{ opacity: textWhiteOpacity }}
//                 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white absolute top-0 left-0 right-0"
//               >
//                 Powerful Features
//               </motion.h2>
//             </div>
            
//             <div className="relative">
//               <motion.p 
//                 style={{ opacity: textGradientOpacity }}
//                 className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" 
//                 data-testid="text-features-desc"
//               >
//                 Everything you need to run a modern hospital, all in one platform
//               </motion.p>
//               <motion.p 
//                 style={{ opacity: textWhiteOpacity }}
//                 className="text-sm md:text-base lg:text-lg text-white max-w-3xl mx-auto absolute top-0 left-0 right-0"
//               >
//                 Everything you need to run a modern hospital, all in one platform
//               </motion.p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Playing card draw animation */}
//         <motion.div 
//           style={{ opacity: cardsOpacity }} 
//           className="flex-1 flex items-center justify-center relative"
//         >
//           <div className="relative w-full max-w-2xl mx-auto h-[350px] md:h-[400px] flex items-center justify-center">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               const animation = getCardAnimation(index);
              
//               return (
//                 <motion.div
//                   key={index}
//                   style={{
//                     x: animation.x,
//                     y: animation.y,
//                     rotate: animation.rotate,
//                     scale: animation.scale,
//                     opacity: animation.opacity,
//                     position: 'absolute',
//                     zIndex: index,
//                   }}
//                   className="w-[200px] md:w-[240px] lg:w-[280px]"
//                   whileHover={{ 
//                     scale: 1.08, 
//                     y: -15,
//                     rotate: 0,
//                     zIndex: 100,
//                     transition: { type: "spring", stiffness: 300 }
//                   }}
//                 >
//                   <Card className="h-[280px] md:h-[320px] lg:h-[360px] p-5 md:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-2xl hover:shadow-3xl flex flex-col" data-testid={`card-feature-${index}`}>
//                     <div className={`w-11 h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-3 shadow-lg flex-shrink-0`}>
//                       <Icon className="w-full h-full text-white" />
//                     </div>
//                     <h3 className="text-sm md:text-base font-bold mb-2 text-gray-900 dark:text-white flex-shrink-0" data-testid={`text-feature-title-${index}`}>
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400 text-xs leading-snug flex-grow overflow-hidden" data-testid={`text-feature-desc-${index}`}>
//                       {feature.description}
//                     </p>
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Immersive section */}
//         <motion.div 
//           style={{ y: heading2Y, opacity: heading2Opacity }}
//           className="absolute inset-0 flex items-center justify-center px-6"
//         >
//           <div className="text-center max-w-5xl">
//             <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 text-white" data-testid="heading-immersive">
//               Redefining{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Healthcare
//               </span>
//               {" "}Management
//             </h2>
//             <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-12" data-testid="text-immersive-desc">
//               Bringing everything together in one powerful, customizable platform. 
//               Unified workflows, real-time insights, and complete control.
//             </p>
//             <div className="flex flex-wrap justify-center gap-6 text-gray-400">
//               <div className="flex items-center gap-2" data-testid="feature-unified">
//                 <CheckCircle2 className="w-6 h-6 text-blue-400" />
//                 <span className="text-lg">Fully Integrated Platform</span>
//               </div>
//               <div className="flex items-center gap-2" data-testid="feature-realtime">
//                 <CheckCircle2 className="w-6 h-6 text-purple-400" />
//                 <span className="text-lg">Real-Time Updates</span>
//               </div>
//               <div className="flex items-center gap-2" data-testid="feature-scalable">
//                 <CheckCircle2 className="w-6 h-6 text-pink-400" />
//                 <span className="text-lg">Infinitely Scalable</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


