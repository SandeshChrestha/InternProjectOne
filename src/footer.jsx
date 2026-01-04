export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full bg-[#faf9f7] relative overflow-hidden">
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

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
                    
                    {/* Column 1: Logo and Brand Information */}
                    <div>
                        {/* Logo */}
                        <div className="mb-4">
                            <img 
                                src="/one.jpg" 
                                alt="Repa Retreat Logo" 
                                className="w-16 h-16 object-cover rounded"
                            />
                        </div>
                        
                        {/* Brand Name */}
                        <h3 className="text-[#d4a574] font-sans uppercase tracking-wider text-lg md:text-xl font-semibold mb-4">
                            REPA RETREAT
                        </h3>
                        
                        {/* Address */}
                        <p className="text-[#4a3a2a] font-sans text-sm md:text-base leading-relaxed mb-6">
                            Repa Retreat Lamagaun-09, Pharping, Dakshinkali Municipality, Kathmandu
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full border-2 border-[#4a3a2a] flex items-center justify-center hover:bg-[#4a3a2a] hover:text-white transition-colors"
                            >
                                <span className="text-[#4a3a2a] hover:text-white font-sans font-bold text-sm">f</span>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full border-2 border-[#4a3a2a] flex items-center justify-center hover:bg-[#4a3a2a] transition-colors"
                            >
                                <svg 
                                    className="w-5 h-5 text-[#4a3a2a] hover:text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full border-2 border-[#4a3a2a] flex items-center justify-center hover:bg-[#4a3a2a] transition-colors"
                            >
                                <svg 
                                    className="w-5 h-5 text-[#4a3a2a] hover:text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: About Us Navigation */}
                    <div>
                        <h4 className="text-[#4a3a2a] font-sans font-semibold text-base md:text-lg mb-4">
                            About Us
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-[#4a3a2a] font-sans text-sm md:text-base hover:text-[#d4a574] transition-colors">
                                    Accommodation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#4a3a2a] font-sans text-sm md:text-base hover:text-[#d4a574] transition-colors">
                                    Repa Programs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#4a3a2a] font-sans text-sm md:text-base hover:text-[#d4a574] transition-colors">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#4a3a2a] font-sans text-sm md:text-base hover:text-[#d4a574] transition-colors">
                                    Workshops
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#4a3a2a] font-sans text-sm md:text-base hover:text-[#d4a574] transition-colors">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#4a3a2a] font-sans text-sm md:text-base hover:text-[#d4a574] transition-colors">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Join Repa Retreat Contact Information */}
                    <div>
                        <h4 className="text-[#4a3a2a] font-serif text-base md:text-lg mb-4">
                            Join Repa Retreat
                        </h4>
                        <div className="space-y-3">
                            <p className="text-[#4a3a2a] font-sans text-sm md:text-base">
                                Phone: <a href="tel:+9779849229999" className="hover:text-[#d4a574] transition-colors">+977 984-9229999</a>
                            </p>
                            <p className="text-[#4a3a2a] font-sans text-sm md:text-base">
                                Business Cell: <a href="tel:+9779849229999" className="hover:text-[#d4a574] transition-colors">+977 984-9229999</a>
                            </p>
                            <p className="text-[#4a3a2a] font-sans text-sm md:text-base">
                                Email: <a href="mailto:repa.retreat@gmail.com" className="hover:text-[#d4a574] transition-colors">repa.retreat@gmail.com</a>
                            </p>
                        </div>
                    </div>

                </div>

                {/* Horizontal Separator */}
                <div className="border-t border-[#ebe5dc] my-8"></div>

                {/* Bottom Section: Copyright and Credit */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#4a3a2a] font-sans text-sm md:text-base">
                        © Copyright 2025 Repa Retreat
                    </p>
                    <p className="text-[#4a3a2a] font-sans text-sm md:text-base">
                        Website by <span className="text-[#d4a574]">Imagio Creations</span>
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-[#4a3a2a] rounded-lg flex items-center justify-center shadow-lg hover:bg-[#3a2e20] transition-colors z-50"
                aria-label="Scroll to top"
            >
                <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 15l7-7 7 7" 
                    />
                </svg>
            </button>
        </footer>
    );
}

