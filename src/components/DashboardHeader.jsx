import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function DashboardHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-[#0B1C2D]/95 backdrop-blur-sm border-b border-[#9B4D5E]/20 px-6 py-4 flex items-center gap-4">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#162a40] transition text-[#9B4D5E] font-semibold"
      >
        <ChevronLeft size={20} />
        Back
      </button>
      {title && <h1 className="text-xl font-bold text-white ml-4">{title}</h1>}
    </div>
  );
}
