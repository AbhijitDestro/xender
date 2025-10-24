'use client';

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const router=useRouter();
  const user=useUser();
  console.log(user.user);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-5">
      <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
      <div className="inline-flex justify-center items-center gap-2 cursor-pointer">
          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <p className="text-white/60 hover:text-white" onClick={() => router.push('/dashboard')}> Hi, {user.user?.firstName}</p>
              <MoveRight  className="w-4 h-4"/>
            </div>
          ) : (
            <SignInButton mode="modal" forceRedirectUrl={"/"}>
              <div className="flex items-center gap-2">
                <p>Sign in to get started</p>
                <MoveRight className="w-4 h-4" />
              </div>
            </SignInButton>
          )}
        </div>
    </div>
    <div className="py-5 px-5 md:px-10 lg:px-20 ">
      <div className="flex justify-between items-center">
      <Image src="/HomeSection/assets/logosaas.svg" alt="logo" width={100} height={100} className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]" />
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <XIcon className="h-6 w-6 cursor-pointer" /> : <MenuIcon className="h-6 w-6 cursor-pointer" />}
      </button>
       <nav className="hidden md:flex gap-6 text-black/60 items-center">
        <a href="showcase" className="hover:text-black transition-colors">Showcase</a>
        <a href="#" className="hover:text-black transition-colors">Features</a>
        <a href="#" className="hover:text-black transition-colors">Pricing</a>
        <a href="#" className="hover:text-black transition-colors">Customers</a>
        <a href="#" className="hover:text-black transition-colors">Contact</a>
        {!isSignedIn && (
          <SignUpButton mode="modal" forceRedirectUrl={"/"}>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-gray-800 transition-colors cursor-pointer">
              Get Started
            </button>
          </SignUpButton>
        )}
        {isSignedIn && <UserButton />}
       </nav>
       {/* Mobile menu */}
       <div
         className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
           isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
         }`}
       >
         <div className="flex flex-col py-4 px-5 gap-4">
           <a href="showcase" className="text-black/60 hover:text-black transition-colors py-2">Showcase</a>
           <a href="#" className="text-black/60 hover:text-black transition-colors py-2">Features</a>
           <a href="#" className="text-black/60 hover:text-black transition-colors py-2">Pricing</a>
           <a href="#" className="text-black/60 hover:text-black transition-colors py-2">Customers</a>
           <a href="#" className="text-black/60 hover:text-black transition-colors py-2">Contact</a>
           <div className="pt-2">
             {!isSignedIn && (
               <SignUpButton mode="modal" forceRedirectUrl={"/"}>
                 <button
                   className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-gray-800 transition-colors cursor-pointer"
                 >
                   Get Started
                 </button>
               </SignUpButton>
             )}
             {isSignedIn && (
               <div className="flex justify-center">
                 <UserButton />
               </div>
             )}
           </div>
         </div>
       </div>
      </div>
    </div>
    </header>
  );
};