export default function Programstwo() {
    return (
        <>
            {/* Main Programs Section */}
            <section className="w-full py-0 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    </div>
                </div>
            </section>

            {/* Preliminary Practices Section */}
            <section className="w-full py-20 bg-[#f5f1eb]">
                <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                            
                            {/* Left Column - Image */}
                            <div className="relative z-10 lg:-mr-16 lg:mt-0 mt-8 lg:order-1 order-2">
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <img 
                                        src="/one.jpg" 
                                        alt="Meditation practitioners in traditional robes" 
                                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Column - Text Box */}
                            <div className="relative z-20 lg:pl-8 lg:order-2 order-1">
                                <div className="bg-[#ebe5dc] rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg">
                                    {/* Title */}
                                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#4a3a2a] mb-6">
                                        Preliminary Practices
                                    </h2>
                                    
                                    {/* Body Text */}
                                    <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8">
                                        The Repa Program is divided into two main phases: preliminary and advanced practices. 
                                        The preliminary phase lasts 1 year and 4 months, while the entire program spans 7 years.
                                    </p>
                                    
                                    {/* LEARN MORE Link */}
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center gap-2 text-[#d4a574] font-sans uppercase tracking-wider text-sm md:text-base hover:text-[#c49a6c] transition-colors"
                                    >
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
                                        LEARN MORE
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

