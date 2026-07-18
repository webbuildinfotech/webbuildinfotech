import React from "react";
import { Smile, CheckCircle, Trophy, Users } from "lucide-react";

const stats = [
  { icon: Smile, value: "45+", label: "Happy Clients", color: "bg-violet-100 text-violet-600" },
  { icon: CheckCircle, value: "50+", label: "Projects Completed", color: "bg-blue-100 text-blue-600" },
  { icon: Trophy, value: "7+", label: "Years Experience", color: "bg-amber-100 text-amber-600" },
  { icon: Users, value: "15+", label: "Team Members", color: "bg-emerald-100 text-emerald-600" },
];

const HomeStatsStrip = () => {
  return (
    <div className="dc-pill container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="dc-pill__inner grid grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 sm:px-10 sm:py-8">
        {stats.map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
              <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStatsStrip;
