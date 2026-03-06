import { useEffect, useState } from "react";
import api from '../api';

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
    <div className="min-h-[80vh] px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Your Bookmarks</h1>

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
  );
}
