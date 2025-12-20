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
export const FloatingFeature = ({ icon: Icon, title, className }) => {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md backdrop-blur-md
      border border-black/5 ${className}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
        <Icon className="h-5 w-5 text-slate-700" />
      </div>
      <p className="text-sm font-medium text-slate-800 whitespace-nowrap">
        {title}
      </p>
    </div>
  );
};

