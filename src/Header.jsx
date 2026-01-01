export default function Header() {
    return (
        
        <header
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/one.jpg')" }}
      >


      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo / Brand */}
        <div className="text-xl font-semibold">
          Logo
        </div>
  
        {/* Menu */}
        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Rooms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Programs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Workshop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
  }
  
  