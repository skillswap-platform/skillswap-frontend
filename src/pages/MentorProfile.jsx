import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import api from '../services/api';
import DashboardHeader from "../components/DashboardHeader";

function getCurrentUserId() {
  const user = localStorage.getItem('user');
  try {
    return user ? JSON.parse(user)._id : null;
  } catch {
    return null;
  }
}

export default function MentorProfile() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ bio: "", skills: [], socialLinks: {}, youtubeLinks: [], availability: "" });
  const [allSkills, setAllSkills] = useState([]);
  const currentUserId = getCurrentUserId();

  useEffect(() => {
    async function fetchData() {
      try {
        const userRes = await api.get(`/users/${id}`);
        setMentor(userRes.data);
        setForm({
          bio: userRes.data.bio || "",
          skills: userRes.data.skills || [],
          socialLinks: userRes.data.socialLinks || {},
          youtubeLinks: userRes.data.youtubeLinks || [],
          availability: userRes.data.availability || "",
        });
        const skillsRes = await api.get("/skills");
        setAllSkills(skillsRes.data.map(s => s.name));
      } catch (err) {
        alert("Failed to load profile");
      }
    }
    fetchData();
  }, [id]);

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => setEditMode(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleSkillToggle = (skill) => {
    setForm(f => ({
      ...f,
      skills: f.skills.includes(skill)
        ? f.skills.filter(s => s !== skill)
        : [...f.skills, skill]
    }));
  };
  const handleSocialLinkChange = (platform, value) => {
    setForm(f => ({
      ...f,
      socialLinks: { ...f.socialLinks, [platform]: value }
    }));
  };
  const handleYoutubeChange = (idx, value) => {
    setForm(f => {
      const links = [...f.youtubeLinks];
      links[idx] = value;
      return { ...f, youtubeLinks: links };
    });
  };
  const handleAddYoutube = () => {
    setForm(f => ({ ...f, youtubeLinks: [...f.youtubeLinks, ""] }));
  };
  const handleRemoveYoutube = (idx) => {
    setForm(f => {
      const links = [...f.youtubeLinks];
      links.splice(idx, 1);
      return { ...f, youtubeLinks: links };
    });
  };
  const handleSave = async () => {
    try {
      await api.put(`/users/${id}`, form);
      setEditMode(false);
      setMentor(m => ({ ...m, ...form }));
    } catch (err) {
      alert("Failed to update profile");
    }
  };

  if (!mentor) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen font-sans bg-[#0B1C2D] relative overflow-x-hidden selection:bg-[#9B4D5E] selection:text-white flex flex-col">
      <DashboardHeader title="Profile" />
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="fixed top-20 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9B4D5E] blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#3b82f6] blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#9B4D5E] blur-[180px] opacity-5 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
      <div className="relative z-10 w-full max-w-3xl mx-auto bg-gradient-to-br from-[#162a40] via-[#253248] to-[#0B1C2D] rounded-3xl shadow-2xl p-10 border border-[#9B4D5E]/30">
        <div className="flex flex-col items-center mb-8">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#9B4D5E] via-[#3b82f6] to-[#162a40] flex items-center justify-center mb-4 shadow-lg">
            <span className="text-5xl font-extrabold text-white drop-shadow-lg">{mentor.name?.charAt(0)}</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight">{mentor.name}</h1>
          <span className="text-[#9B4D5E] font-semibold uppercase tracking-wide mb-2">{mentor.role ? mentor.role.charAt(0).toUpperCase() + mentor.role.slice(1) : "Mentor"}</span>
        </div>

        {editMode ? (
          <div className="mb-8 bg-[#162a40] p-6 rounded-xl border border-[#9B4D5E]/20 shadow-lg">
          <label className="block mb-4">
            <span className="font-bold">Bio</span>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              className="w-full mt-2 p-2 rounded bg-[#0B1C2D] text-white border border-[#9B4D5E]"
              rows={3}
            />
          </label>
          <div className="mb-4">
            <span className="font-bold">Skills</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {allSkills.map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 font-medium text-sm ${form.skills.includes(skill) ? "bg-[#9B4D5E] border-[#9B4D5E] text-white" : "bg-[#1E293B] border-white/10 text-slate-300 hover:border-white/30 hover:bg-[#253248]"}`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold">GitHub</span>
            <input
              type="text"
              value={form.socialLinks.github || ""}
              onChange={e => handleSocialLinkChange("github", e.target.value)}
              className="w-full mt-2 p-2 rounded bg-[#0B1C2D] text-white border border-[#9B4D5E]"
              placeholder="GitHub profile URL"
            />
          </div>
          <div className="mb-4">
            <span className="font-bold">LinkedIn</span>
            <input
              type="text"
              value={form.socialLinks.linkedin || ""}
              onChange={e => handleSocialLinkChange("linkedin", e.target.value)}
              className="w-full mt-2 p-2 rounded bg-[#0B1C2D] text-white border border-[#9B4D5E]"
              placeholder="LinkedIn profile URL"
            />
          </div>
          <div className="mb-4">
            <span className="font-bold">YouTube Video Links</span>
            {form.youtubeLinks.map((link, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={link}
                  onChange={e => handleYoutubeChange(idx, e.target.value)}
                  className="w-full p-2 rounded bg-[#0B1C2D] text-white border border-[#9B4D5E]"
                  placeholder="YouTube video URL"
                />
                <button type="button" onClick={() => handleRemoveYoutube(idx)} className="text-red-400">Remove</button>
              </div>
            ))}
            <button type="button" onClick={handleAddYoutube} className="mt-2 px-4 py-1 bg-[#9B4D5E] text-white rounded">Add Video</button>
          </div>
          <div className="mb-4">
            <span className="font-bold">Availability</span>
            <textarea
              name="availability"
              value={form.availability}
              onChange={handleChange}
              className="w-full mt-2 p-2 rounded bg-[#0B1C2D] text-white border border-[#9B4D5E]"
              rows={2}
              placeholder="e.g., Weekdays 5-8PM, Weekends anytime"
              required
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={handleSave} className="px-6 py-2 bg-[#9B4D5E] text-white rounded font-bold">Save</button>
            <button onClick={handleCancel} className="px-6 py-2 bg-slate-500 text-white rounded">Cancel</button>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="mb-8 text-center">
            <p className="text-lg text-slate-300 italic mb-2">{mentor.bio || "No bio provided yet."}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#1E293B] rounded-xl p-6 shadow">
              <h3 className="font-bold text-[#9B4D5E] mb-2 text-lg">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(mentor.skills) && mentor.skills.length > 0
                  ? mentor.skills.map((skill, idx) => {
                      if (typeof skill === 'string') return (
                        <span key={idx} className="px-3 py-1 rounded-full bg-[#9B4D5E]/20 text-[#9B4D5E] font-semibold text-sm">{skill}</span>
                      );
                      if (skill && typeof skill === 'object') {
                        if (skill.name) return (
                          <span key={idx} className="px-3 py-1 rounded-full bg-[#9B4D5E]/20 text-[#9B4D5E] font-semibold text-sm">{skill.name}</span>
                        );
                        // If object has isAvailable/note, skip rendering as badge
                        if (Object.keys(skill).length === 2 && skill.isAvailable !== undefined && skill.note !== undefined) return null;
                        // Otherwise, show a generic badge
                        return (
                          <span key={idx} className="px-3 py-1 rounded-full bg-[#9B4D5E]/10 text-[#9B4D5E] font-semibold text-sm">Unknown Skill</span>
                        );
                      }
                      return null;
                    })
                  : <span className="text-slate-500">No skills listed yet.</span>
                }
              </div>
            </div>
            <div className="bg-[#1E293B] rounded-xl p-6 shadow">
              <h3 className="font-bold text-[#9B4D5E] mb-2 text-lg">Availability</h3>
              <p className="text-slate-300">{
                Array.isArray(mentor.skills) && mentor.skills.length > 0
                  ? mentor.skills
                      .map(skill => {
                        if (typeof skill === 'string') return skill;
                        if (skill && typeof skill === 'object') {
                          if (skill.name) return skill.name;
                          if (Object.keys(skill).length === 2 && skill.isAvailable !== undefined && skill.note !== undefined) return null;
                          return 'Unknown Skill';
                        }
                        return null;
                      })
                      .filter(Boolean)
                      .join(', ')
                  : mentor.availability || 'No availability info yet.'
              }</p>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-[#9B4D5E] mb-2 text-lg">YouTube Videos</h3>
            <ul>
              {mentor.youtubeLinks?.length > 0 ? mentor.youtubeLinks.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{link}</a>
                </li>
              )) : <li className="text-slate-500">No videos yet.</li>}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-[#9B4D5E] mb-2 text-lg">Social Links</h3>
            <div className="flex gap-4">
              {mentor.socialLinks?.github && (
                <a href={mentor.socialLinks.github} target="_blank" className="px-4 py-2 bg-[#9B4D5E] text-white rounded-full font-semibold shadow hover:bg-[#be5d72] transition">GitHub</a>
              )}
              {mentor.socialLinks?.linkedin && (
                <a href={mentor.socialLinks.linkedin} target="_blank" className="px-4 py-2 bg-[#3b82f6] text-white rounded-full font-semibold shadow hover:bg-[#2563eb] transition">LinkedIn</a>
              )}
            </div>
          </div>
          {currentUserId === id && (
            <div className="flex justify-center">
              <button onClick={handleEdit} className="px-8 py-3 bg-gradient-to-r from-[#9B4D5E] to-[#3b82f6] text-white rounded-full font-bold shadow-lg hover:scale-105 transition">Edit Profile</button>
            </div>
          )}
        </React.Fragment>
      )}
      </div>
      </div>
    </div>
  );
}
