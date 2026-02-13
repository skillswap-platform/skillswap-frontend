import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 px-6 text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#9B4D5E]/20 to-transparent p-10 rounded-3xl border border-[#9B4D5E]/30 backdrop-blur-sm">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Swapping Skills?</h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Join our community today and start exchanging knowledge with people around the world.
        </p>
        {/* <button className="bg-[#9B4D5E] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#be5d72] transition shadow-xl shadow-[#9B4D5E]/20 inline-block transform hover:-translate-y-1 duration-200">
          Sign Up Now
        </button> */}
        <Link
            to="/register"
            className="bg-[#9B4D5E] text-white px-4 py-2 rounded-lg
                       hover:bg-[#B35F73] transition shadow-md"
        >
          Sign up now
        </Link>
      </div>
    </section>
  );
}