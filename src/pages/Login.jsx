import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Login goes straight to dashboard
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative">
       <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-[#3b82f6] blur-[150px] opacity-10 translate-x-1/2 rounded-full pointer-events-none"></div>

      <div className="bg-[#1E293B] p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">Welcome Back</h2>
        <p className="text-slate-400 text-center mb-8">Continue growing your skills.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input type="email" className="w-full bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9B4D5E] transition" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input type="password" className="w-full bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9B4D5E] transition" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-[#0B1C2D] border border-white/10 text-white py-3 rounded-lg font-bold hover:bg-[#253248] transition mt-4">
            Log In
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#9B4D5E] font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}