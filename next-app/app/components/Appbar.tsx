"use client"

import { signIn, signOut, useSession } from "next-auth/react"

const Appbar = () => {
    const session = useSession()
  return (
    <div className="flex justify-between">
        <div>VibeRise</div>
        <div>
            {session.data?.user && <button className="m-2 p-2 bg-blue-400 hover:bg-blue-700 rounded-2xl text-center" onClick={()=>signOut()}>SignOut</button>}
            {!session.data?.user && <button className="m-2 p-2 bg-blue-400 hover:bg-blue-700 rounded-2xl text-center" onClick={()=>signIn()}>SignIn</button>}
            
        </div>

    </div>
  )
}

export default Appbar