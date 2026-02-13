import { Code, Globe, Camera, Utensils, Palette, Music, Dumbbell, TrendingUp } from "lucide-react";

export default function PopularSkills() {
  const skills = [
    { name: "Web Development", count: 84, icon: <Code size={20} /> },
    { name: "Language Learning", count: 51, icon: <Globe size={20} /> },
    { name: "Photography", count: 83, icon: <Camera size={20} /> },
    { name: "Cooking", count: 82, icon: <Utensils size={20} /> },
    { name: "Graphic Design", count: 86, icon: <Palette size={20} /> },
    { name: "Music Production", count: 43, icon: <Music size={20} /> },
    { name: "Fitness Training", count: 39, icon: <Dumbbell size={20} /> },
    { name: "Financial Planning", count: 42, icon: <TrendingUp size={20} /> },
  ];

  return (
    <section className="py-24 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Skills Being Swapped</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:border-[#9B4D5E]/50 transition cursor-pointer group hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/5 rounded-lg text-[#9B4D5E] group-hover:bg-[#9B4D5E] group-hover:text-white transition">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-white">{skill.name}</h3>
              </div>
              <p className="text-slate-400 text-sm pl-1">{skill.count} active swappers</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}