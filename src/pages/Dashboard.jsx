import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/mentors")
      .then((res) => res.json())
      .then((data) => setMentors(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Available Mentors</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor._id}
              className="bg-[#1E293B] p-6 rounded-2xl border border-white/10 hover:border-[#9B4D5E] transition"
            >
              <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>

              <p className="text-slate-400 text-sm mb-4">
                {mentor.bio || "Experienced mentor ready to help you grow."}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#0B1C2D] px-3 py-1 rounded-full text-xs border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                to={`/mentor/${mentor._id}`}
                className="text-[#9B4D5E] font-bold hover:underline"
              >
                View Profile →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
