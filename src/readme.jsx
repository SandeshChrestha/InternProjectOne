export default function Readme() {
    return (
        <section className="w-full py-20 bg-[#faf9f7] relative overflow-hidden" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
        }}>
            
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column - Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img 
                                src="/one.jpg" 
                                alt="Meditation retreat participants" 
                                className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Testimonial */}
                    <div className="relative pl-0 lg:pl-8">
                        <div className="relative">
                            {/* Google Logo */}
                            <div className="mb-6">
                                <svg 
                                    width="32" 
                                    height="32" 
                                    viewBox="0 0 24 24" 
                                    className="w-8 h-8"
                                >
                                    <path 
                                        fill="#4285F4" 
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path 
                                        fill="#34A853" 
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path 
                                        fill="#FBBC05" 
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path 
                                        fill="#EA4335" 
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                            </div>

                            {/* Large Quotation Mark */}
                            <div className="absolute -top-4 -left-2 text-[#ebe5dc] text-9xl md:text-[12rem] font-serif leading-none opacity-50">
                                "
                            </div>

                            {/* Review Text */}
                            <div className="relative z-10 pt-8">
                                <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 font-sans">
                                    Words can hardly describe the incredible time I had at the Repa Retreat. I can warmly recommend this magical place to anyone seeking peace and renewal.
                                    <br /><br />
                                    The campus is enchanting, and the entire program is designed with so much thought and love, down to the smallest details. The teachers and staff are truly wonderful people who create an atmosphere of care...
                                </p>

                                {/* Reviewer Name */}
                                <p className="font-serif text-2xl md:text-3xl text-[#4a3a2a] mb-4">
                                    Claire Thompson
                                </p>

                                {/* READ MORE Link */}
                                <a 
                                    href="#" 
                                    className="inline-flex items-center gap-2 text-[#d4a574] font-sans uppercase tracking-wider text-sm md:text-base hover:text-[#c49a6c] transition-colors"
                                >
                                    READ MORE
                                    <svg 
                                        className="w-4 h-4" 
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
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

