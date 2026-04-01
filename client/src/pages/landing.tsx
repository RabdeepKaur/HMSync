import HeroSection from "../components/herosection";
import HospitalFeatureCards from "../components/Featurecard";
import WhyChooseSection from "../components/Whychooseuse";
import TestimonialsSection from "../components/Testimonal";
import ContactSection from "../components/ContactForm";


import { motion} from "framer-motion";


/* Navbar*/
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
      className="fixed top-2 md:top-8 left-0 right-0 z-50 flex justify-center px-4  "
    >
      <div className="flex items-center gap-20 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl max-w-full">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-2 md:px-4 py-2 font-bold text-base md:text-lg text-black bg-clip-text  hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-300 dark:hover:to-purple-300 transition-all whitespace-nowrap"
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
          className="px-3 md:px-5 py-2 rounded-lg text-xs md:text-sm font-semibold bg-[#FF731D] text-white shadow-lg transition-all duration-300 whitespace-nowrap"
          onClick={() => {
            const target = document.querySelector("#contact");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Book a Demo
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
      <FloatingNavbar />
      <HeroSection />
<HospitalFeatureCards/>
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
