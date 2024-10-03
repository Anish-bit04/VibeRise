import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Music, ThumbsUp, Share2 } from "lucide-react";
import Link from "next/link";
import Appbar from "./components/Appbar";
import Redirect from "./components/Redirect";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950">
      <Appbar/>
      <Redirect />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Elevate Your Playlist Game with VibeRise
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Create, share, and vote on music playlists from various
                  platforms. Collaborate with friends and discover new tunes
                  together.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-gray-500 border-gray-600 hover:bg-gray-800"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/50 backdrop-blur-md">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              How VibeRise Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-gray-700/50 backdrop-blur-md max-w-sm w-full">
                <Music className="h-12 w-12 mb-2 text-indigo-400" />
                <h3 className="text-xl font-bold text-white text-center">
                  Add Songs
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Add tracks from Spotify, YouTube, Apple Music, and more
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-gray-700/50 backdrop-blur-md max-w-sm w-full">
                <ThumbsUp className="h-12 w-12 mb-2 text-indigo-400" />
                <h3 className="text-xl font-bold text-white text-center">
                  Vote on Tracks
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Upvote or downvote songs to influence the playlist order
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-gray-700/50 backdrop-blur-md max-w-sm w-full">
                <Share2 className="h-12 w-12 mb-2 text-indigo-400" />
                <h3 className="text-xl font-bold text-white text-center">
                  Collaborate
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Invite friends to contribute to your playlists
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Curate the Ultimate Playlist Together
                </h2>
                <p className="text-gray-400 max-w-[600px]">
                  VibeRise makes it easy to collaborate on playlists with your
                  friends. Add songs from various platforms, vote on tracks, and
                  enjoy a democratic music experience.
                </p>
                <ul className="grid gap-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-indigo-400" />{" "}
                    Multi-platform integration
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-indigo-400" /> Real-time
                    voting system
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-indigo-400" /> Shareable
                    playlist links
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-indigo-400" />{" "}
                    Customizable queue order
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md p-6 bg-gray-800/50 backdrop-blur-md rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Join the VibeRise Community
                  </h3>
                  <p className="text-gray-300 mb-6 text-center">
                    Sign up now to start creating collaborative playlists and
                    discover new music with friends.
                  </p>
                  <form className="space-y-4">
                    <Input
                      className="bg-gray-700/50 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                    <Input
                      className="bg-gray-700/50 text-white placeholder-gray-400"
                      type="email"
                      placeholder="Your email"
                    />
                    <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                      Sign Up
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/50 backdrop-blur-md">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Elevate Your Music Experience?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Join VibeRise today and start creating, sharing, and voting on
                  playlists with your friends across multiple music platforms.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <form className="flex space-x-4">
                  <Input
                    className="flex-1 bg-gray-700/50 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className=" bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-400 ">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800/50 backdrop-blur-md">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="text-xs text-gray-400">
              © 2024 VibeRise. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-xs text-gray-400 hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs text-gray-400 hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
