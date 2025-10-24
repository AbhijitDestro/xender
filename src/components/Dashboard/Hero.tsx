"use client"
import { ArrowUp, ImagePlus, LayoutDashboard, UserPlus, House, User } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

const suggestions=[
  {
    label:'Dashboard',
    prompt:"Create an analytics dashboard to travk customers and revenue data for a SaaS",
    icon:LayoutDashboard,
  },
  {
    label:"SignUp Form",
    prompt:"Create a user-friendly and modern sign-up form for a SaaS platform with email/password fields, Google and Github login options, and terms checkbox.",
    icon:UserPlus,
  },
  {
    label:"Hero Section",
    prompt:"Create a modern hero section for a SaaS platform with a hero image, title, description, and call-to-action button.",
    icon:House ,
  },
  {
    label:"User Profile Card",
    prompt:"Create a modern user profile card component for a social media website with user avatar, name, email, and a brief bio.",
    icon:User,
  }
]

const Hero = () => {
  const [userInput,setUserInput]=React.useState<string>("");

  return (
    <main className="container mx-auto px-5 md:px-10 lg:px-20 py-10 mt-20">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            What will you create today?
          </h1>
          <p className="text-lg text-gray-400 font-medium mb-10">
            Create stunning apps & websites by chatting with AI.
          </p>
          <div className='flex justify-center p-2 bg-black rounded-3xl'>
          <div className='w-full max-w-3xl p-3  rounded-2xl bg-[#333336]'>
            <textarea placeholder="Describe your idea here..." className='w-full h-24 focus:outline-none focus:ring-0 text-white font-medium resize-none' value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
            <div className='flex justify-between'>
                <button><ImagePlus className='text-[#909090]' size={25}/></button>
                <button className='bg-[#909090] rounded-lg w-10 h-10 items-center flex justify-center cursor-pointer' onClick={()=>setUserInput("")}><ArrowUp size={25} className='text-black'/></button>
            </div>
          </div>
          </div>
          <div className='flex-wrap justify-center sm:gap-2 sm:mt-4 sm:flex'>
            {suggestions.map((suggestion,index)=>(
              <Button key={index} className='cursor-pointer mt-2 mr-2 mb-2' onClick={()=>setUserInput(suggestion.prompt)}><suggestion.icon size={25} className='text-[#909090]'/>{suggestion.label}</Button>
            ))}
          </div>
        </section>
      </main>
  )
}

export default Hero

