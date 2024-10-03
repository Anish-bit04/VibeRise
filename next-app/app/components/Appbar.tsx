"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const Appbar = () => {
    const session = useSession()
  return (
    <div className="flex justify-between px-16 mt-10">
        <div className="flex text-3xl text-slate-100 justify-center items-center space-x-2">
          <Headphones/>
          <span>VibeRise</span> </div>
        <div>
            {session.data?.user && <Button className="bg-indigo-600 text-white hover:bg-indigo-700" onClick={()=>signOut()}>Sign Out</Button>}
            {!session.data?.user && <Button className="bg-indigo-600 text-white hover:bg-indigo-700" onClick={()=>signIn()}>Sign In</Button>}      
        </div>

    </div>
  )
}

export default Appbar