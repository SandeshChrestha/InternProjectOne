export default function Quote() {
    return (
      <section className="w-full py-20 bg-[#f5f1eb]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Center Image */}
          <div className="mb-10 flex justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-md">
              <img
                src="/one.jpg"
                alt="Meditation icon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Quote Text */}
          <blockquote className="text-gray-800 text-xl md:text-2xl font-serif leading-relaxed max-w-3xl mx-auto">
            Immerse yourself in your spiritual journey and experience the supportive
            energy of the hills and caves blessed by many masters
          </blockquote>

         
  
        </div>

        
      </section>
    );
  }
  