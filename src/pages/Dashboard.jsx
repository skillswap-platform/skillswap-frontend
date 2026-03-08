import { useEffect, useState } from "react";
import api from '../api';
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

export default function Dashboard() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    api
      .get('/mentors')
      .then((res) => setMentors(res.data))
      .catch((err) => {
        const msg = err.response?.data?.error || err.message || 'Failed to load mentors';
        alert(msg);
      });
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#0B1C2D] relative overflow-x-hidden selection:bg-[#9B4D5E] selection:text-white flex flex-col">
      <DashboardHeader title="Mentor Dashboard" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9B4D5E] blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#3b82f6] blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#9B4D5E] blur-[180px] opacity-5 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
      <div className="relative z-10 px-6 py-12">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#9B4D5E]">Mentor Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.length === 0 ? (
            <div className="text-slate-400 col-span-3 text-center">No mentors found.</div>
          ) : mentors.map((mentor) => (
            <Link
              key={mentor._id}
              to={`/mentor/${mentor._id}`}
              className="bg-[#162a40] p-8 rounded-2xl border border-white/10 hover:border-[#9B4D5E] shadow-xl transition flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#9B4D5E]/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#9B4D5E]">{mentor.name.charAt(0)}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-white">{mentor.name}</h2>
              <p className="text-slate-400 mb-2">{Array.isArray(mentor.skills) ? mentor.skills.join(", ") : mentor.skills}</p>
              <p className="text-sm text-slate-500 mb-2">{mentor.availability || ''}</p>
              <span className="inline-block mt-2 px-4 py-1 bg-[#9B4D5E] text-white rounded-full text-xs font-semibold">View Profile</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
