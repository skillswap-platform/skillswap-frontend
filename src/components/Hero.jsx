import { Code, Camera, Music, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* --- Left Content (Text) --- */}
        <div className="space-y-6 text-center lg:text-left relative z-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Share Skills, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] to-[#9B4D5E]">
              Grow Together
            </span>
          </h1>
          
          <p className="text-[#CBD5E1] text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            Exchange your expertise with others in a community-based platform. 
            Teach what you know, learn what you don't.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Link to="/register">
              <button className="bg-[#9B4D5E] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#be5d72] transition shadow-xl shadow-[#9B4D5E]/20 inline-block transform hover:-translate-y-1 duration-200">
                Get started
              </button>
            </Link>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/5 transition text-center">
              Find a Skill Swap <ArrowRight size={18} />
            </button>

            {localStorage.getItem('user') && (
              <Link to={`/mentor/${JSON.parse(localStorage.getItem('user'))._id}`}>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#9B4D5E] text-[#9B4D5E] bg-white px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition text-center">
                  My Profile
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* --- Right Content (Visuals) --- */}
        
        {/* 1. Mobile & Tablet View (Horizontal Scroll / Same Line) 
            Changed flex-col to flex-row and added overflow-x-auto.
            Removed opacity/translate effects so all cards are visible.
        */}
        <div className="flex flex-row gap-4 overflow-x-auto w-full pb-4 lg:hidden mt-8 relative z-10 snap-x snap-mandatory px-2 no-scrollbar">
            
            {/* Card 1 */}
            <div className="snap-center bg-[#1E293B] border border-white/10 p-4 rounded-xl shadow-lg min-w-[260px] flex-shrink-0 flex items-center justify-between">
               <div>
                  <h3 className="font-bold text-white text-sm">Web Development</h3>
                  <p className="text-[10px] text-[#9B4D5E] mt-0.5 font-medium">Offering</p>
               </div>
               <Code className="text-[#9B4D5E]" size={20} />
            </div>

            {/* Card 2 */}
            <div className="snap-center bg-[#1E293B] border border-white/10 p-4 rounded-xl shadow-lg min-w-[260px] flex-shrink-0 flex items-center justify-between">
               <div>
                  <h3 className="font-bold text-white text-sm">Photography</h3>
                  <p className="text-[10px] text-[#9B4D5E] mt-0.5 font-medium">Offering</p>
               </div>
               <Camera className="text-[#9B4D5E]" size={20} />
            </div>

             {/* Card 3 */}
             <div className="snap-center bg-[#1E293B] border border-white/10 p-4 rounded-xl shadow-lg min-w-[260px] flex-shrink-0 flex items-center justify-between">
               <div>
                  <h3 className="font-bold text-white text-sm">Guitar Lessons</h3>
                  <p className="text-[10px] text-[#9B4D5E] mt-0.5 font-medium">Looking for</p>
               </div>
               <Music className="text-[#9B4D5E]" size={20} />
            </div>
        </div>

        {/* 2. Desktop View (Original Floating Animation) 
            Only visible on Large screens (lg:block)
        */}
        <div className="relative h-[400px] w-full hidden lg:block">
          
          {/* Card 1 */}
          <div className="absolute top-0 right-10 bg-[#1E293B] border border-white/10 p-5 rounded-xl shadow-2xl w-64 z-20 transform hover:-translate-y-2 transition duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white">Web Development</h3>
                <p className="text-xs text-[#9B4D5E] mt-1 font-medium">Offering</p>
              </div>
              <div className="bg-[#9B4D5E]/20 p-2 rounded-lg">
                <Code className="text-[#9B4D5E]" size={20} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute top-24 right-48 bg-[#1E293B] border border-white/10 p-5 rounded-xl shadow-2xl w-64 z-10 transform hover:-translate-y-2 transition duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white">Photography</h3>
                <p className="text-xs text-[#9B4D5E] mt-1 font-medium">Offering</p>
              </div>
               <div className="bg-[#9B4D5E]/20 p-2 rounded-lg">
                <Camera className="text-[#9B4D5E]" size={20} />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute top-52 right-80 bg-[#1E293B] border border-white/10 p-5 rounded-xl shadow-2xl w-64 z-0 transform hover:-translate-y-2 transition duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white">Guitar Lessons</h3>
                <p className="text-[#9B4D5E] mt-1 font-medium">Looking for</p>
              </div>
               <div className="bg-[#9B4D5E]/20 p-2 rounded-lg">
                <Music className="text-[#9B4D5E]" size={20} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}