export default function Programs() {
    const programs = [
      {
        title: "Repa Program in ",
        highlight: "Nepali Language",
        image: "/one.jpg",
      },
      {
        title: "Repa Program ",
        highlight: "Chinese Language",
        image: "/one.jpg",
      },
      {
        title: "Repa Program ",
        highlight: "English Language",
        image: "/one.jpg",
      },
    ];
  
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {programs.map((item, index) => (
              <div key={index} className="group">
                
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.highlight}
                    className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
  
                {/* Title */}
                <h3 className="font-serif text-lg mb-4">
                  {item.title}
                  <span className="text-[#9c6b3f] italic">
                    {item.highlight}
                  </span>
                </h3>
  
                {/* Learn More */}
                <button className="flex items-center gap-3 text-sm font-medium tracking-wide text-[#9c6b3f]">
                  <span className="w-9 h-9 rounded-full border border-[#9c6b3f] flex items-center justify-center">
                    →
                  </span>
                  LEARN MORE
                </button>
  
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  