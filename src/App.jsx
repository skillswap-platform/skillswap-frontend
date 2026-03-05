import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './pages/AuthPage';
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoleSelect from "./pages/RoleSelect";
import SkillSelect from "./pages/SkillSelect";
import Dashboard from "./pages/Dashboard";
import MentorProfile from "./pages/MentorProfile";
import Bookmarks from "./pages/Bookmarks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/role-select" element={<RoleSelect />} />
        <Route path="/skill-select" element={<SkillSelect />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mentor/:id" element={<MentorProfile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
