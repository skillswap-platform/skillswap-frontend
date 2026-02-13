import { User, Search, ArrowLeftRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <User size={28} className="text-[#9B4D5E]" />,
      title: "Create Your Profile",
      desc: "Sign up and list the skills you can offer and the ones you want to learn."
    },
    {
      icon: <Search size={28} className="text-[#9B4D5E]" />,
      title: "Find Your Match",
      desc: "Search for users who offer what you need and need what you offer."
    },
    {
      icon: <ArrowLeftRight size={28} className="text-[#9B4D5E]" />,
      title: "Start Swapping",
      desc: "Connect, schedule sessions, and exchange skills with your new partner."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">How It Works</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#9B4D5E] transition duration-300 group-hover:scale-110 shadow-lg">
                <div className="group-hover:text-white transition duration-300">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}