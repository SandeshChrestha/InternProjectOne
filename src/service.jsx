export default function Service() {
    return (
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Card Container */}
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
            
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/one.jpg')" }}
            />
  
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
  
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="pl-10 md:pl-16 max-w-xl text-white">
                
                {/* Label */}
                <p className="text-sm tracking-widest uppercase mb-4">
                  OUR SERVICES
                </p>
  
                {/* Heading */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Repa Retreat
                  <br />
                  Service
                </h1>
  
                {/* Description */}
                <p className="text-base md:text-lg mb-8 opacity-90">
                  We invite you to join us in this transformative path of growth
                  and enlightenment.
                </p>
  
                {/* Button */}
                <button className="flex items-center gap-4 bg-[#9c6b3f] hover:bg-[#8b5e35] transition px-6 py-3 rounded-full shadow-lg">
                  <span className="bg-white text-[#9c6b3f] w-9 h-9 rounded-full flex items-center justify-center">
                    →
                  </span>
                  <span className="text-sm font-medium tracking-wide">
                    VIEW ALL SERVICES
                  </span>
                </button>
  
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  