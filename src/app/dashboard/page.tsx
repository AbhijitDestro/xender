"use client"
import Hero from '@/components/Dashboard/Hero'
import { Navbar } from '@/components/Dashboard/Navbar'
import { useUser } from '@clerk/nextjs';


const page = () => {
  const { user } = useUser();
  console.log("User is logged in:", !!user);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full h-full object-cover"
      style={{ backgroundImage: "url('/DashboardSection/bg.jpeg')" }}
    >
        <Navbar />
        <Hero />
    </div>
  )
}

export default page