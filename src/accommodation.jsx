export default function Accommodation() {
    return (
        <section className="w-full py-20 bg-[#faf9f7]">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    {/* ACCOMMODATION Label */}
                    <p className="text-[#d4a574] text-sm md:text-base font-sans uppercase tracking-wider mb-4">
                        ACCOMMODATION
                    </p>
                    
                    {/* Main Title */}
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4a3a2a] leading-tight">
                        Your Stay at Repa Retreat
                    </h2>
                </div>

                {/* Three Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Block A Card */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                            <img 
                                src="/one.jpg" 
                                alt="Block (Building) A - Meditation space" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay gradient for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        {/* Label */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-white font-sans text-lg md:text-xl font-medium">
                                Block (Building) A
                            </p>
                        </div>
                    </div>

                    {/* Block B Card */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                            <img 
                                src="/one.jpg" 
                                alt="Block (Building) B - Singing bowl practice" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay gradient for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        {/* Label */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-white font-sans text-lg md:text-xl font-medium">
                                Block (Building) B
                            </p>
                        </div>
                    </div>

                    {/* Block C Card */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                            <img 
                                src="/one.jpg" 
                                alt="Block (Building) C - Dining area" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay gradient for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        {/* Label */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-white font-sans text-lg md:text-xl font-medium">
                                Block (Building) C
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

