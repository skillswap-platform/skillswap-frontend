import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/mentors")
      .then((res) => setMentors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-[80vh] px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Available Mentors</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Link
            key={mentor._id}
            to={`/mentor/${mentor._id}`}
            className="bg-[#1E293B] p-6 rounded-xl border border-white/10 hover:border-[#9B4D5E] transition"
          >
            <h2 className="text-xl font-bold">{mentor.name}</h2>

            <p className="text-slate-400 mt-2">
              {mentor.skills.join(", ")}
            </p>

            <p className="text-sm mt-2 text-slate-500">
              {mentor.availability}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
