import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './pages/AuthPage';
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MentorProfile from "./pages/MentorProfile";
import Bookmarks from "./pages/Bookmarks";
import Browse from "./pages/Browse";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mentor/:id" element={<MentorProfile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
