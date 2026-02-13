import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './pages/AuthPage';
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoleSelect from "./pages/RoleSelect";
import SkillSelect from "./pages/SkillSelect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/role-select" element={<RoleSelect />} />
        <Route path="/skill-select" element={<SkillSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
