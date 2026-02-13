import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add Firebase/Backend logic here later
    // For now, we simulate success and move to Onboarding
    navigate("/onboarding/role");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#9B4D5E] blur-[150px] opacity-20 -translate-x-1/2 rounded-full pointer-events-none"></div>

      <div className="bg-[#1E293B] p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">Join SkillSwap</h2>
        <p className="text-slate-400 text-center mb-8">Start your learning journey today.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
            <input type="text" className="w-full bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9B4D5E] transition" placeholder="John Doe" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input type="email" className="w-full bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9B4D5E] transition" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input type="password" className="w-full bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9B4D5E] transition" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-[#9B4D5E] text-white py-3 rounded-lg font-bold hover:bg-[#be5d72] transition shadow-lg shadow-[#9B4D5E]/20 mt-4 flex items-center justify-center gap-2">
            Create Account <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#9B4D5E] font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}