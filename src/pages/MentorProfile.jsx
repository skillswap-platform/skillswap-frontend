import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MentorProfile() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/mentors/${id}`)
      .then((res) => res.json())
      .then((data) => setMentor(data));
  }, [id]);

  if (!mentor) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-[#1E293B] p-8 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-bold mb-4">{mentor.name}</h2>

          <p className="text-slate-400 mb-6">
            {mentor.bio || "Mentor passionate about sharing knowledge."}
          </p>

          <h3 className="text-xl font-bold mb-3">Skills</h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {mentor.skills?.map((skill) => (
              <span
                key={skill}
                className="bg-[#0B1C2D] px-3 py-1 rounded-full text-xs border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>

          {mentor.youtube && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">YouTube Content</h3>

              <iframe
                width="100%"
                height="315"
                src={mentor.youtube}
                title="Mentor Video"
                className="rounded-lg"
              ></iframe>
            </div>
          )}

          {mentor.github && (
            <div>
              <h3 className="text-xl font-bold mb-2">GitHub Resources</h3>

              <a
                href={mentor.github}
                target="_blank"
                className="text-[#9B4D5E] font-bold hover:underline"
              >
                View GitHub Notes
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
