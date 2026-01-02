export default function Programs() {
    return (
        <>
            {/* Main Programs Section */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        
                        {/* Left Side - Title Section */}
                        <div>
                            {/* REPA PROGRAM Label */}
                            <p className="text-[#d4a574] text-sm md:text-base font-sans uppercase tracking-wider mb-6">
                                REPA PROGRAM
                            </p>
                            
                            {/* Main Title */}
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4a3a2a] leading-tight">
                                A Comprehensive
                                <br />
                                <span className="italic ml-4 md:ml-6 lg:ml-8">
                                    Spiritual Journey
                                </span>
                            </h1>
                        </div>

                        {/* Right Side - Description */}
                        <div className="flex items-start pt-8 lg:pt-12">
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-lg">
                                The Repa Program is divided into two main phases: preliminary and advanced practices. 
                                The preliminary phase lasts 1 year and 4 months, while the entire program spans 7 years.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Preliminary Practices Section */}
            <section className="w-full py-20 bg-[#f5f1eb]">
                <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                            
                            {/* Left Column - Text Box */}
                            <div className="relative z-20 lg:pr-8">
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

                            {/* Right Column - Image */}
                            <div className="relative z-10 lg:-ml-16 lg:mt-0 mt-8 lg:mt-0">
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <img 
                                        src="/one.jpg" 
                                        alt="Meditation practitioners in traditional robes" 
                                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
