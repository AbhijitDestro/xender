"use client"

import { SignInButton, useUser } from "@clerk/nextjs";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleDashboardRedirect = () => {
    router.push("/dashboard");
  };

  return (
    <section className="pt-4 pb-20 md:pt-10 md:pb-16 lg:pt-12 lg:pb-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="px-5 md:px-10 lg:px-20">
        <div className="md:flex items-center">
        <div className="md:w-[400px] lg:w-[478px] xl:w-[550px] 2xl:w-[650px] -mt-5">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight text-black">Version 1.0 is here</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-2">Build Stunning Websites in Minutes</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/60 tracking-tight mt-4" >
            Design, write, and launch your website effortlessly. No coding. No limits. Just your vision — brought to life by AI.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            {!isSignedIn ? (
              <SignInButton mode="modal" forceRedirectUrl={"/dashboard"}>
                <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight cursor-pointer hover:bg-gray-800 transition-colors">Get Started</button>
              </SignInButton>
            ) : (
              <button 
                onClick={handleDashboardRedirect}
                className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight cursor-pointer hover:bg-gray-800 transition-colors"
              >
                Go to Dashboard
              </button>
            )}
            <button className="text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight cursor-pointer hover:bg-gray-100 transition-colors"><span className="mr-2">Learn More</span><MoveRight /></button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[500px] lg:h-[648px] xl:h-[700px] 2xl:h-[800px] md:flex-1 relative">
          <Image src="/HomeSection/assets/cog.png" alt="Cog Image" width={380} height={380} className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 xl:left-12 2xl:left-[230px]"/>
          <Image src="/HomeSection/assets/cylinder.png" alt="Cylinder Image" width={160} height={160} className="hidden md:block -top-6 -left-24 md:absolute lg:-top-8 lg:-left-32 lg:w-[220px] lg:h-[220px] xl:-top-8 xl:-left-20 xl:w-[250px] xl:h-[250px] 2xl:-top-10 2xl:left-[110px] 2xl:w-[280px] 2xl:h-[280px]"/>
          <Image src="/HomeSection/assets/noodle.png" alt="Noodle Image" width={200} height={200} className="hidden lg:block absolute top-[420px] lg:top-[524px] lg:left-[350px] xl:top-[580px] xl:left-[448px] 2xl:top-[640px] 2xl:left-[900px] rotate-[30deg]"/>
        </div>
        </div>
      </div>
    </section>
  )
}