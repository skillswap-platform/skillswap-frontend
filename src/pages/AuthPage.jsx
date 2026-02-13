import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User',
    skills: []
  });

  // Pre-defined skills for selection
  const availableSkills = ["React", "Node.js", "MongoDB", "Express", "Tailwind"];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin 
      ? 'http://localhost:5000/api/auth/login' 
      : 'http://localhost:5000/api/auth/register';
    
    try {
      // Important: withCredentials allows cookies to be sent/received
      const res = await axios.post(url, formData, { withCredentials: true });
      alert(`Success: Welcome ${res.data.name}!`);
    } catch (err) {
      alert(err.response?.data?.message || 'An error occurred');
    }
  };

  const handleForgotPassword = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/forgot-password', { email: formData.email });
      alert('OTP sent to your email!');
    } catch (err) {
      alert('Error sending OTP');
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
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Select Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {availableSkills.map(skill => (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => handleSkillChange(skill)}
                        className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                          formData.skills.includes(skill)
                            ? 'bg-[#9B4D5E] border-[#9B4D5E] text-white'
                            : 'bg-transparent border-gray-500 text-gray-300'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
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