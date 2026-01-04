export default function UpcomingProgram() {
    return (
        <section className="w-full py-20 bg-[#faf9f7] relative overflow-hidden">
            {/* Decorative flowing curve on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 pointer-events-none">
                <svg 
                    viewBox="0 0 200 1000" 
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    style={{ opacity: 0.3 }}
                >
                    <path 
                        d="M0,0 Q40,80 25,180 Q15,280 35,380 Q20,480 45,580 Q30,680 50,780 Q35,880 60,980 Q50,1000 0,1000 Z" 
                        fill="#d4a574" 
                        stroke="none"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Section - Title */}
                    <div className="lg:col-span-3 relative z-20">
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#4a3a2a] leading-tight mb-2">
                            Upcoming
                        </h2>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4a3a2a] leading-tight italic">
                            Programs
                        </h2>
                    </div>

                    {/* Center Section - Image */}
                    <div className="lg:col-span-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img 
                                src="/one.jpg" 
                                alt="Meditation retreat participants" 
                                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Section - Program Listings */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Program 1 */}
                        <div className="border-b border-gray-300 pb-6 last:border-b-0">
                            <h3 className="font-serif text-xl md:text-2xl text-[#4a3a2a] mb-2">
                                Profound Inner Principle Retreat
                            </h3>
                            <p className="text-[#d4a574] text-sm md:text-base font-sans mb-4">
                                27 February - 2 March 2025
                            </p>
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#ebe5dc] flex items-center justify-center group-hover:bg-[#d4a574] transition-colors">
                                    <svg 
                                        className="w-5 h-5 text-[#4a3a2a] group-hover:text-white transition-colors" 
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
                                </div>
                                <span className="text-[#4a3a2a] font-sans text-sm md:text-base font-medium group-hover:text-[#d4a574] transition-colors">
                                    VIEW FORM
                                </span>
                            </a>
                        </div>

                        {/* Program 2 */}
                        <div className="border-b border-gray-300 pb-6 last:border-b-0">
                            <h3 className="font-serif text-xl md:text-2xl text-[#4a3a2a] mb-2">
                                The 1st Repa Buddhist Council
                            </h3>
                            <p className="text-[#d4a574] text-sm md:text-base font-sans mb-4">
                                3 March - 7 March 2025
                            </p>
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#ebe5dc] flex items-center justify-center group-hover:bg-[#d4a574] transition-colors">
                                    <svg 
                                        className="w-5 h-5 text-[#4a3a2a] group-hover:text-white transition-colors" 
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
                                </div>
                                <span className="text-[#4a3a2a] font-sans text-sm md:text-base font-medium group-hover:text-[#d4a574] transition-colors">
                                    VIEW FORM
                                </span>
                            </a>
                        </div>

                        {/* Program 3 */}
                        <div className="border-b border-gray-300 pb-6 last:border-b-0">
                            <h3 className="font-serif text-xl md:text-2xl text-[#4a3a2a] mb-2">
                                Offering Mandala of the four preliminary Practices
                            </h3>
                            <p className="text-[#d4a574] text-sm md:text-base font-sans mb-4">
                                9 March - 11 March 2025
                            </p>
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#ebe5dc] flex items-center justify-center group-hover:bg-[#d4a574] transition-colors">
                                    <svg 
                                        className="w-5 h-5 text-[#4a3a2a] group-hover:text-white transition-colors" 
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
                                </div>
                                <span className="text-[#4a3a2a] font-sans text-sm md:text-base font-medium group-hover:text-[#d4a574] transition-colors">
                                    VIEW FORM
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

