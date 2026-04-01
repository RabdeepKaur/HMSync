
import { motion } from "framer-motion";
;
import { Card } from "@/components/ui/card";

import testimonials from "@/data/testimonials.json";

export default function TestimonialsSection() {
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
