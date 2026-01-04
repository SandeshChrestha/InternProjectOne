export default function ProgramParticipation() {
    return (
        <section className="w-full relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="/one.jpg" 
                    alt="Singing bowl meditation practice" 
                    className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Left Side - Empty/Spacer */}
                    <div className="hidden lg:block"></div>

                    {/* Right Side - Text Overlay Box */}
                    <div className="lg:col-span-1">
                        <div 
                            className="bg-white/85 backdrop-blur-md rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            }}
                        >
                            {/* Title */}
                            <div className="mb-6">
                                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#4a3a2a] leading-tight mb-2">
                                    Program
                                </h2>
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4a3a2a] leading-tight italic">
                                    Participation
                                </h2>
                            </div>

                            {/* Body Text */}
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 font-sans">
                                The Repa Program is committed to guiding individuals through a profound spiritual journey with a blend of virtual and in-person experiences. We invite you to join us in this transformative path of growth and enlightenment.
                            </p>

                            {/* Button */}
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-3 bg-[#f5f1eb] hover:bg-[#ebe5dc] px-6 py-4 rounded-full transition-all duration-300 group shadow-md hover:shadow-lg"
                            >
                                {/* Paper Airplane Icon */}
                                <svg 
                                    className="w-5 h-5 text-[#4a3a2a] group-hover:translate-x-1 transition-transform" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                                    />
                                </svg>
                                <span className="text-[#4a3a2a] font-sans uppercase tracking-wider text-sm md:text-base font-semibold">
                                    JOIN REPA RETREAT
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

