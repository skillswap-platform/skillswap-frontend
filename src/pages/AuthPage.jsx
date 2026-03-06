import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { parseError } from '../services/api';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'learner', // backend accepts mentor|learner|both
    skills: []
  });

  // Skills fetched from backend
  const [availableSkills, setAvailableSkills] = useState([]);
  const [skillsByCategory, setSkillsByCategory] = useState({});

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await api.get("/skills");
        setAvailableSkills(res.data);
        // Group skills by category
        const grouped = {};
        res.data.forEach(skill => {
          if (!grouped[skill.category]) grouped[skill.category] = [];
          grouped[skill.category].push(skill);
        });
        setSkillsByCategory(grouped);
      } catch (err) {
        console.error("Failed to fetch skills", err);
      }
    };
    fetchSkills();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (skill) => {
    setFormData(prev => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
            skills: formData.skills,
          };
      const res = await api.post(endpoint, payload); // api instance adds baseURL & auth

      // Save token and user data for both login and registration
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data));
      }

      alert(`Success: Welcome ${res.data.name}!`);
      navigate('/dashboard');
    } catch (err) {
      const errorMsg = parseError(err);
      alert(errorMsg);
    }
  };

  const handleForgotPassword = async () => {
    try {
      // If you have a forgot password endpoint, update here. Otherwise, show a message.
      alert('Forgot password feature coming soon.');
    } catch (err) {
      const errorMsg = parseError(err);
      alert(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1C2D] text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#162a40] rounded-lg shadow-xl border border-gray-700">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-[#9B4D5E]">
          {showForgot ? 'Reset Password' : isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        {!showForgot ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Register Only Fields */}
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#0B1C2D] border border-gray-600 rounded focus:outline-none focus:border-[#9B4D5E]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <select
                    name="role"
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#0B1C2D] border border-gray-600 rounded focus:outline-none focus:border-[#9B4D5E]"
                  >
                    <option value="learner">Learner</option>
                    <option value="mentor">Mentor</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Select Skills</label>
                  {Object.keys(skillsByCategory).length === 0 ? (
                    <div className="text-slate-400">Loading skills...</div>
                  ) : (
                    <div className="space-y-4">
                      {Object.entries(skillsByCategory).map(([category, skills]) => (
                        <div key={category}>
                          <div className="font-semibold text-[#9B4D5E] mb-2">{category}</div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {skills.map(skill => (
                              <button
                                type="button"
                                key={skill._id}
                                onClick={() => handleSkillChange(skill.name)}
                                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                                  formData.skills.includes(skill.name)
                                    ? 'bg-[#9B4D5E] border-[#9B4D5E] text-white shadow-md scale-105'
                                    : 'bg-[#1E293B] border-gray-500 text-gray-300 hover:border-[#9B4D5E] hover:bg-[#253248]'
                                }`}
                              >
                                {skill.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Common Fields */}
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0B1C2D] border border-gray-600 rounded focus:outline-none focus:border-[#9B4D5E]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0B1C2D] border border-gray-600 rounded focus:outline-none focus:border-[#9B4D5E]"
                required
              />
            </div>

            {/* Forgot Password Link (Login Only) */}
            {isLogin && (
              <div className="text-right">
                <button 
                  type="button" 
                  onClick={() => setShowForgot(true)}
                  className="text-sm text-[#9B4D5E] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#9B4D5E] hover:bg-[#7a3b49] text-white font-semibold rounded transition duration-200"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
        ) : (
          /* Forgot Password View */
          <div className="space-y-4">
            <p className="text-sm text-gray-300">
              Enter your email address and we'll send you an OTP to reset your password.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0B1C2D] border border-gray-600 rounded focus:outline-none focus:border-[#9B4D5E]"
            />
            <button
              onClick={handleForgotPassword}
              className="w-full py-2 px-4 bg-[#9B4D5E] hover:bg-[#7a3b49] text-white font-semibold rounded"
            >
              Send OTP
            </button>
            <button 
              onClick={() => setShowForgot(false)}
              className="w-full text-sm text-gray-400 hover:text-white"
            >
              Back to Login
            </button>
          </div>
        )}

        {/* Toggle Login/Register */}
        {!showForgot && (
          <div className="text-center text-sm text-gray-400 mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#9B4D5E] font-bold hover:underline"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;