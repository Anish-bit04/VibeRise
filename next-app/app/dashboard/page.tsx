"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { ThumbsUp, ThumbsDown, Plus, Play, Pause, SkipForward, Music, Headphones } from "lucide-react"
import Link from "next/link"
import { signOut } from 'next-auth/react'

type Song = {
  id: string
  title: string
  artist: string
  votes: number
}

export default function Dashboard() {
  const [queue, setQueue] = useState<Song[]>([
    { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', votes: 5 },
    { id: '2', title: 'Shape of You', artist: 'Ed Sheeran', votes: 3 },
    { id: '3', title: 'Dance Monkey', artist: 'Tones and I', votes: 2 },
  ])
  const [newSong, setNewSong] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const addSong = () => {
    if (newSong.trim()) {
      const [title, artist] = newSong.split('-').map(s => s.trim())
      setQueue([...queue, { id: Date.now().toString(), title, artist, votes: 0 }])
      setNewSong('')
    }
  }

  const voteSong = (id: string, increment: number) => {
    setQueue(queue.map(song => 
      song.id === id ? { ...song, votes: song.votes + increment } : song
    ).sort((a, b) => b.votes - a.votes))
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-gray-800/50 backdrop-blur-md">
        <Link className="flex items-center justify-center" href="#">
          <Headphones className="h-6 w-6 text-indigo-400" />
          <span className="ml-2 text-lg font-bold text-white">VibeRise</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-300 hover:text-indigo-400" href="#">
            Dashboard
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-indigo-400" href="#">
            Profile
          </Link>
          <Button  onClick={()=>signOut()} variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-700">
            Sign Out
          </Button>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Add a New Song</h2>
            <div className="flex space-x-2">
              <Input 
                className="flex-1 bg-gray-700/50 text-white placeholder-gray-400" 
                placeholder="Add song Youtube Url"
                value={newSong}
                onChange={(e) => setNewSong(e.target.value)}
              />
              <Button onClick={addSong} className="bg-indigo-600 text-white hover:bg-indigo-700">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Now Playing</h2>
            <div className="bg-gray-800/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">{queue[0]?.title || 'No song playing'}</h3>
              <p className="text-gray-400 mb-4">{queue[0]?.artist || 'Add songs to the queue'}</p>
              <div className="flex items-center justify-between mb-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:text-indigo-400 hover:bg-gray-700"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Slider
                  className="w-full mx-4"
                  value={[currentTime]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setCurrentTime(value[0])}
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:text-indigo-400 hover:bg-gray-700"
                >
                  <SkipForward className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Song Queue</h2>
          <ScrollArea className="h-[400px] bg-gray-800/50 backdrop-blur-md rounded-lg p-4">
            {queue.map((song, index) => (
              <div key={song.id} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">{index + 1}</span>
                  <Music className="h-4 w-4 text-indigo-400" />
                  <div>
                    <h3 className="text-white font-medium">{song.title}</h3>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">{song.votes}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-400 hover:text-green-500 hover:bg-gray-700"
                    onClick={() => voteSong(song.id, 1)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-400 hover:text-red-500 hover:bg-gray-700"
                    onClick={() => voteSong(song.id, -1)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </main>
      <footer className="w-full py-6 bg-gray-800/50 backdrop-blur-md">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="text-xs text-gray-400">© 2024 VibeRise. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs text-gray-400 hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-gray-400 hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}