
import { motion, } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  Settings,
} from "lucide-react";

export default function WhyChooseSection() {
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