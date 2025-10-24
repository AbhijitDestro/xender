'use client';

import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { SidebarTrigger } from "../ui/sidebar";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user=useUser();
  console.log(user.user)

  return (
    <header className='sticky top-0 z-50'>
      <div className={`py-5 px-5 md:px-5 lg:px-10 bg-transparent ${isMenuOpen ? 'bg-white transition-all duration-300 ease-in-out' : ''}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center -ml-2">
            <SidebarTrigger
              className="w-8 h-8 cursor-pointer text-white"
            />
          </div>
         
          <nav className="hidden md:flex gap-12 text-white/60 items-center text-lg">
            <a href="#" className="hover:text-white transition-colors font-medium">Enterprise</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Pricing</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
          <button
              className="md:hidden text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon className="h-6 w-6 text-black cursor-pointer" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          <UserButton appearance={{ elements: { avatarBox: 'w-20 h-20' } }} />
          </div>
          {/* Mobile menu */}
          <div
            className={`absolute top-full left-0 w-full shadow-lg md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100 translate-y-0 bg-white' : 'opacity-0 -translate-y-2 pointer-events-none '
            }`}
          >
            <div className="flex flex-col py-4 px-5 gap-4 backdrop-blur-2xl">
              <a href="#" className="text-black/60 hover:text-black transition-colors py-2 font-medium">Enterprise</a>
              <a href="#" className="text-black/60 hover:text-black transition-colors py-2 font-medium">Pricing</a>
              <a href="#" className="text-black/60 hover:text-black transition-colors py-2 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};