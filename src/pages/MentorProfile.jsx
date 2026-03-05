import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MentorProfile() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/mentors/${id}`)
      .then((res) => setMentor(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!mentor) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-[80vh] px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4">{mentor.name}</h1>

      <p className="text-slate-400 mb-4">{mentor.bio}</p>

      <div className="mb-6">
        <h3 className="font-bold mb-2">Skills</h3>
        <p>{mentor.skills.join(", ")}</p>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">Availability</h3>
        <p>{mentor.availability}</p>
      </div>

      <div className="flex gap-4">
        {mentor.socialLinks?.github && (
          <a
            href={mentor.socialLinks.github}
            target="_blank"
            className="text-[#9B4D5E]"
          >
            GitHub
          </a>
        )}

        {mentor.socialLinks?.linkedin && (
          <a
            href={mentor.socialLinks.linkedin}
            target="_blank"
            className="text-[#9B4D5E]"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
