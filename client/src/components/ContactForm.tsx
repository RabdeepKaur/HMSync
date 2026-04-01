
import { motion} from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";


import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  hospitalName: z.string().min(2, "Hospital name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
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