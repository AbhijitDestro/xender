import { useTRPC } from '@/trpc/client'
import React from 'react'

const Page = () => {

  const trpc= useTRPC()
  trpc.hello.queryOptions({text:"Hello!"})
  
  return (
    <div>
      <h1>AI Vibe Coder</h1>
    </div>
  )
}

export default Page