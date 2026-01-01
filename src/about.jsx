export default function About() {
  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column - Top Left Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/one.jpg" 
                alt="Indoor yoga and meditation session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Column - Text Content */}
          <div className="lg:col-span-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
              Tranquil Sanctuary for{' '}
              <span className="text-3xl md:text-4xl lg:text-5xl italic">
                Meditation Retreats
              </span>
            </h1>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Repa Retreat is an ideal place for meditation, healing, and connecting. 
              Our tranquil and secluded location overlooking the Kathmandu valley 
              provides the perfect environment for your spiritual journey.
            </p>
            
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors rounded-sm">
              LEARN MORE
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>

          {/* Right Column - Top Right Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/one.jpg" 
                alt="Outdoor yoga session with prayer flags" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row - Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {/* Bottom Left Image */}
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/one.jpg" 
              alt="Close-up of meditation with Buddha statue" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/one.jpg" 
              alt="Outdoor group meditation session" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

