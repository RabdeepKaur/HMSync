/*
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

*/