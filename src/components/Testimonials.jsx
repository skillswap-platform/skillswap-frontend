export default function Testimonials() {
  const reviews = [
    {
      initial: "S",
      name: "Sarah Johnson",
      role: "Web Developer",
      quote: "I taught JavaScript and learned photography in return. The platform made it easy to find the perfect match for my skills."
    },
    {
      initial: "M",
      name: "Michael Chen",
      role: "Language Teacher",
      quote: "Teaching Mandarin and learning guitar has been a rewarding experience. I've made great connections through SkillSwap."
    },
    {
      initial: "E",
      name: "Emma Rodriguez",
      role: "Graphic Designer",
      quote: "The skill exchange model is brilliant! I improved my design portfolio while learning cooking from a professional chef."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">What Our Users Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black/20 border border-white/10 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-[#9B4D5E] text-xs uppercase tracking-wide font-bold">{review.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">"{review.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}