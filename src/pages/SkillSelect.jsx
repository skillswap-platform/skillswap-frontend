import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

// You can add more skills here later
const SKILLS_LIST = [
  "Web Development", "React.js", "Node.js", "Java", "Python", 
  "Data Science", "UI/UX Design", "Photography", "Digital Marketing", 
  "Public Speaking", "Guitar", "Cooking", "Fitness", "Financial Planning",
  "Graphic Design", "Video Editing", "Machine Learning"
];

export default function SkillSelection() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleContinue = () => {
    // Logic to save skills would go here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 relative">
      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What are your interests?</h2>
          <p className="text-[#CBD5E1] text-lg">Select at least 3 skills you want to learn or teach.</p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {SKILLS_LIST.map((skill) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`
                  relative px-6 py-3 rounded-full border transition-all duration-300 font-medium text-sm md:text-base
                  ${isSelected 
                    ? "bg-[#9B4D5E] border-[#9B4D5E] text-white shadow-[0_0_20px_rgba(155,77,94,0.4)] scale-105" 
                    : "bg-[#1E293B] border-white/10 text-slate-300 hover:border-white/30 hover:bg-[#253248]"}
                `}
              >
                {skill}
                {/* Checkmark Badge */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 bg-white text-[#9B4D5E] rounded-full p-0.5 shadow-sm">
                    <Check size={12} strokeWidth={4} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 items-center">
          <button 
            onClick={() => navigate("/onboarding/role")}
            className="text-slate-400 hover:text-white font-medium transition"
          >
            Back
          </button>
          
          <button
            onClick={handleContinue}
            disabled={selectedSkills.length === 0}
            className={`
              px-10 py-3 rounded-lg font-bold transition shadow-lg flex items-center gap-2
              ${selectedSkills.length > 0 
                ? "bg-white text-[#0B1C2D] hover:bg-gray-100 hover:scale-105 cursor-pointer" 
                : "bg-white/10 text-white/40 cursor-not-allowed"}
            `}
          >
            Continue <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}