import DashboardHeader from "../components/DashboardHeader";

export default function Messages() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1C2D]">
      <DashboardHeader title="Messages" />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-[#162a40] rounded-lg shadow-xl border border-gray-700 text-center">
        <h2 className="text-3xl font-bold text-[#9B4D5E] mb-4">Messages</h2>
        <p className="text-lg text-slate-300 mb-6">Chat feature coming soon 🚀</p>
        <div className="flex justify-center">
          <span className="bg-[#9B4D5E] text-white px-6 py-2 rounded-full font-semibold shadow-md">Stay tuned!</span>
        </div>
        </div>
      </div>
    </div>
  );
}
