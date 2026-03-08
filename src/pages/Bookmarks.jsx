import { useEffect, useState } from "react";
import api from '../api';
import DashboardHeader from "../components/DashboardHeader";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    api
      .get('/users/bookmarks')
      .then((res) => setBookmarks(res.data))
      .catch((err) => {
        const msg = err.response?.data?.error || err.message || 'Failed to load bookmarks';
        alert(msg);
      });
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#0B1C2D] text-white flex flex-col">
      <DashboardHeader title="Your Bookmarks" />
      <div className="relative z-10 px-6 py-10 flex-1">

      <div className="grid md:grid-cols-2 gap-6">
        {bookmarks.map((b, index) => (
          <div
            key={index}
            className="bg-[#1E293B] p-6 rounded-xl border border-white/10"
          >
            <h2 className="font-bold">{b.title}</h2>

            <p className="text-sm text-slate-400">{b.type}</p>

            <a
              href={b.url}
              target="_blank"
              className="text-[#9B4D5E] mt-2 block"
            >
              Open Resource
            </a>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
