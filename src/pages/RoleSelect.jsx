import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Users } from "lucide-react";

export default function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    // Logic to save role would go here
    console.log("Selected Role:", role); 
    navigate("/onboarding/skills");
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How do you want to use SkillSwap?</h2>
        <p className="text-[#CBD5E1] text-lg">We'll customize your experience based on your choice.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Learner Card */}
        <button onClick={() => handleRoleSelect('learner')} className="bg-[#1E293B] p-8 rounded-2xl border border-white/10 hover:border-[#9B4D5E] hover:bg-[#1E293B]/80 hover:-translate-y-1 transition group text-left shadow-lg">
          <div className="bg-[#0B1C2D] w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#9B4D5E] transition">
            <BookOpen className="text-[#9B4D5E]" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">I want to learn</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Find mentors and resources to master new skills and advance your career.</p>
        </button>

        {/* Mentor Card */}
        <button onClick={() => handleRoleSelect('mentor')} className="bg-[#1E293B] p-8 rounded-2xl border border-white/10 hover:border-[#9B4D5E] hover:bg-[#1E293B]/80 hover:-translate-y-1 transition group text-left shadow-lg">
          <div className="bg-[#0B1C2D] w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#9B4D5E] transition">
            <GraduationCap className="text-[#9B4D5E]" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">I want to teach</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Share your expertise, mentor others, and grow your professional network.</p>
        </button>

        {/* Both Card */}
        <button onClick={() => handleRoleSelect('both')} className="bg-[#1E293B] p-8 rounded-2xl border border-white/10 hover:border-[#9B4D5E] hover:bg-[#1E293B]/80 hover:-translate-y-1 transition group text-left shadow-lg">
          <div className="bg-[#0B1C2D] w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#9B4D5E] transition">
            <Users className="text-[#9B4D5E]" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">I want to do both</h3>
          <p className="text-slate-400 text-sm leading-relaxed">The full experience. Teach what you know and learn what you don't.</p>
        </button>
      </div>
    </div>
  );
}